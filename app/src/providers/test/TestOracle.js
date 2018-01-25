import Oracles from '../Oracles'; 
class TestOracle {
    static  Test(){
        let config = {
            username: "system",
            password:"oracle",
            host: "192.168.99.100",
            port:"49133",
            sid:"xe",
            externalAuth: false
        };
        Oracles.Connect(config).then(res=>console.warn({status:"success", data:res})).catch(err=>console.error(err));
    }
}

export default TestOracle;
