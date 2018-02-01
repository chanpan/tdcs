
module.exports.syncQ=async(status, buffe_config, config_sql,buffe_constants, oracles,db_connection, queryCheck,saveLog,showConsole,showConsoleErr,ipcRendererCheck,saveJson,checkSyncQ,token)=>{
    let dataQ = [];
    let dataTransferAll = 0;
    let dataQAll = 0;
    try {
        if (checkSyncQ == false) {
            checkSyncQ = true;
            if (showConsole == true) {
                console.warn("syncQ");
            }
            let urlTransferService = buffe_constants[8].value + "/buffe-transfer/get43-file?token="+token;
            let data43File = await fetch(urlTransferService);
            data43File = await data43File.json();
            
            for(let i of data43File){
                let countSqlQ = "SELECT  COUNT(*) AS dataQ FROM \"SYSTEM\".\"buffe_fetch_queue\" WHERE \"f_tname\"= SUBSTR('f_drug_ipd',3,100)";
                let countSqlT = "SELECT  COUNT(*) AS dataT FROM `" + buffe_constants[0].value + "`.`buffe_transfer` WHERE SUBSTRING_INDEX(`table`,'f_',-1) = SUBSTRING_INDEX('" + i['f43'] + "','f_',-1) AND `status` <> 2";
                console.log(countSqlQ);return false;
            }
        }
    }catch(err){
        console.error(err);
    }

    // oracles.getConnection(db_connection, function(err, connection) {
    //     //if (err) reject(err); return false;
    //     connection.execute("SELECT owner, table_name FROM dba_tables", (err, result) => {
    //        // if (err) reject(err); return false;
    //        console.log(result.rows);
    //     });
    // });
}