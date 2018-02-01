const DEFAULT_FOLDER = "tdcs";
const DEFAULT_SQLITEDB = "tdcs.db";
const fo = require("./Files");
const TARGET_FOLDER = `${fo.get_userhome()}\\${DEFAULT_FOLDER}`;
exports.db_sqlite_target_filenamedb_sqlite_target_filename=()=>{
    return TARGET_FOLDER+"\\"+DEFAULT_SQLITEDB;
} 
exports.db_sqlite_target_filename=()=>{
    return TARGET_FOLDER+"\\"+DEFAULT_SQLITEDB;
} 