import KnexSqlites from '../KnexSqlites';
 
class TestOracle {
    static  Test(){
        KnexSqlites.Connect().select("*").from("buffe_command").then(res=>console.warn({status:"success", data:res}));
    }
}

export default TestOracle;
