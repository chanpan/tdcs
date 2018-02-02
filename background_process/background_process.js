/** ipc */
const electron = require("electron").remote;
const ipcMain = electron.ipcMain;
const ipcRenderer = electron.ipcRenderer;
const processCheck = true;

const KnexSqlite = require("./config/KnexSqlite");
const files = require("./config/Files");
const oracles = require("oracledb");

//ram and cpu
const machine = require("./config/Machine");
const Processq = require("./Processq");

oracles.outFormat = oracles.OBJECT;
let db_connection;

let queryCheck = true; /**ไว้ เช็ค query */
let saveLog = true;
let showConsole = false;
let showConsoleErr = false;
let ipcRendererCheck = true;
let saveJson = true; 
let checkSyncQ = false;
class Background_Process {  
  constructor() {
    KnexSqlite.Connect().select("*").from("config_sql") .where({ access_token: this.Token("") }).map(result => {
        db_connection = {
          user: result.username, //"system",
          password: result.password, //"oracle",
          connectString: result.host + ":" + result.port + "/" + result.sid, //"192.168.99.100:49133/xe",//"192.168.99.100:49133/xe",
          externalAuth: false
        };
      })
      .catch(err => console.error(err));
  }
  querySql(sql) {
    console.warn('querySql');
    return new Promise((resolve, reject) => {
      oracles.getConnection(db_connection, function(err, connection) {
        //if (err) reject(err); return false;
        connection.execute(sql, (err, result) => {
           // if (err) reject(err); return false;
            resolve(result.rows);
        });
      });
    });
  }
  Token(name = "") {
    name = "" || "access_token";
    return localStorage.getItem(name);
  }
  async buffe_query(status, dataConfig, dataConstant, dataConfigSql) {
    if (status == 1) {
        let token = localStorage.getItem("access_token");
      try {
        if (queryCheck == true) {
          queryCheck = false;
          /** fetch ข้อมูลจาก server  */
          let urlQuery = `${dataConstant[8].value}/buffe-command/get-query?token=${token}`;/**get url https://webservice08.thaicarecloud.org */
          try{
            let response = await fetch(urlQuery);
            let dataQueryService = await response.json();
            if (dataQueryService) {
                let sqlQuery = dataQueryService["sql"];
                let id = dataQueryService["id"];
                for (let i of dataConstant) {
                  /** replace เพื่อเปลี่ยนค่า constant ใน sqlQuery  */
                  if (i["name"] != "_HIS_DB_") {sqlQuery = sqlQuery.replace(new RegExp(i["name"], "g"), i["value"]);}
                }
                /** replace เพื่อเปลี่ยนค่า constant ใน dataConfigSql  */
                sqlQuery = sqlQuery.replace(/_HIS_DB_/g, dataConfigSql["dbnames"]);
                /** สั่ง oracle query */
                let dataQuery_str = await this.querySql(sqlQuery);
                let urlQuery_str = `${dataConstant[8].value}/buffe-command/enable-query?token=${token}`;
                /**  */
                let formData  = new FormData(); 
                formData.append("id", id);
                formData.append("result", JSON.stringify(dataQuery_str));
                let statusQuery_str = await fetch(urlQuery_str,{method: 'post',body:formData}); 
                let result_str = await statusQuery_str.json();                
                if (result_str == 'OK') {                   
                    if (showConsole == true) { console.log('Enable query success'); }
                    queryCheck = true;
                } else {
                    if (showConsoleErr == true) { console.log('Server error : Enable query error'); }
                    queryCheck = true;
                }    
              } //endif dataQueryService
          }catch(err){     
            queryCheck = true;                         
          }
          
        } //endif queryCheck
      } catch (err) {
        queryCheck = true;   
        if (showConsoleErr == true) { console.error(err); }
      }
    } else {
    }
  }
}//Background_Process
let token = localStorage.getItem("access_token");
let obj = new Background_Process();

//  ipcMain.on("Start", async function(event) {
async function onLoad(){
  let status = localStorage.getItem("status");
  let buffe_config = await KnexSqlite.Connect().select("*").from("buffe_config").where({ token: token });
  let config_sql = await KnexSqlite.Connect().select("*").from("config_sql").where({ access_token: token });
  let buffe_constants = await KnexSqlite.Connect().select("*").from("buffe_constants").where({ token: token });
  obj.buffe_query(status, buffe_config[0], buffe_constants, config_sql[0]);
  
  //setInterval(()=>{
    await Processq.syncQ(status, buffe_config, config_sql,buffe_constants, oracles,db_connection,queryCheck,saveLog,showConsole,showConsoleErr,ipcRendererCheck,saveJson,checkSyncQ,token);
  //},10000);
}onLoad();
//   
  // event.sender.send("test-func",machine.get_ram_total());
// });

ipcMain.on("dashboard", async function(event) {
   
  event.sender.send("dashboard-func", await machine.get_ram_total());

});