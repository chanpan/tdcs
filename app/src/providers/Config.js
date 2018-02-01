import Api from "./Api";
import KnexSqlites from "./KnexSqlites";
import Token from "./Token";
import TableNames from "./TableNames";


class Config {
    static async save_his_type(count_his) {
        if (count_his && count_his.count > 0) {
            await KnexSqlites.Delete(TableNames.hists(), { token: Token.get_access_token('') })
                .then(res => console.warn(res)).catch(err => console.error(err));
        }
        await Api.get_new_his_type().then(his => {
            his.map(res => {
                KnexSqlites.Create(TableNames.hists(), { id: res.id, his_type: res.his_type, his_name: res.his_name, token: Token.get_access_token('') });
            });
        });
    }
    static save_buffe_command(count_command) {
        if (count_command && count_command.count > 0) {

        } else {

        }
    }
    static async save_buffe_config(count_config) {
        if (count_config && count_config.count > 0) {
            await KnexSqlites.Delete(TableNames.buffe_config(), { token: Token.get_access_token('') })
                .then(res => console.warn(res)).catch(err => console.error(err));
        }
        await Api.tdc_get_buffe_config().then(data => {
            data['token'] = Token.get_access_token('');
            KnexSqlites.Create(TableNames.buffe_config(), data).then(res => console.warn(res.message)).catch(err => console.error(err));
        });

    }
    static async save_constant(count_constant) {
        if (count_constant && count_constant.count > 0) {
            await KnexSqlites.Delete(TableNames.buffe_constant(), { token: Token.get_access_token('') })
                .then(res => console.warn(res)).catch(err => console.error(err));
        }
        let obj = [];
        await Api.tdc_get_buffe_constants().then(res => {
            res.map((data, key) => {
                obj[key] = { name: data.id, value: data.value, token: Token.get_access_token("") };
            });
        });
        KnexSqlites.Create(TableNames.buffe_constant(), obj)
            .then(res => console.warn(res.message)).catch(err => console.error(err));

    }

    static async save_config_sql() {
        KnexSqlites.getCount(TableNames.config_sql(), {access_token:Token.get_access_token("")})
        .then(res=>{
            if(res.count == 0){
                let date = new Date();
                let id = date.getTime();
                let data = {id:id, access_token:localStorage.getItem('access_token'), sitecode:localStorage.getItem('sitecode')}
                KnexSqlites.Create(TableNames.config_sql(), data).then(res=>console.log(res.message)).catch(err=>console.error(err));
     
            } 
        })
    }
}
export default Config;