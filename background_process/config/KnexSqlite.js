const url = require("./Url");
var knex = require("knex")({
    client:'sqlite3',
    connection:{
         filename: url.db_sqlite_target_filename()
    },
    useNullAsDefault: true
}); 

exports.Connect=()=>{
    return knex;
}