import KnexSqlites from '../KnexSqlites';
 
class TestOracle {
    static  Test(){
        KnexSqlites.Connect().select("*").from("buffe_command").then(res=>console.warn({status:"connection sqlite3 success", data:res}));
    }
}

export default TestOracle;
