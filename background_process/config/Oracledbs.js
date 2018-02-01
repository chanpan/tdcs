const KnexSqlite = require("./KnexSqlite");
const oracles = require("oracledb");

oracles.outFormat = oracles.OBJECT;
let db_connection;
module.exports = class Oracledbs {
  constructor() {
    let result = {user: "system", password: "oracle", connectString: "192.168.99.100:49133/xe", externalAuth: false}
    db_connection = {
      user: result.username, //"system",
      password: result.password, //"oracle",
      connectString: result.host + ":" + result.port + "/" + result.sid, //"192.168.99.100:49133/xe",//"192.168.99.100:49133/xe",
      externalAuth: false
    };
    return db_connection;
  }
  Test() {
    console.warn("OK");
    // return new Promise((resolve, reject) => {
    //   oracles.getConnection(db_connection, function(err, connection) {
    //     //if (err) reject(err); return false;
    //     connection.execute(sql, (err, result) => {
    //        // if (err) reject(err); return false;
    //         resolve(result.rows);
    //     });
    //   });
    // });
  }
  Token(name = "") {
    name = "" || "access_token";
    return localStorage.getItem(name);
  }
};
