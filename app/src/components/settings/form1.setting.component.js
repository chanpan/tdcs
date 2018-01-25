import React, { Component } from "react";
import TextInput from "../../providers/html/TextInput";
import Select from "../../providers/html/Select";
import Api from "../../providers/Api";
import KnexSqlites from "../../providers/KnexSqlites";
import TableNames from "../../providers/TableNames";
import Token from "../../providers/Token";

class Form1SettingComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            hists: [],
            hisName: [{ id: '', names: '' }],
            histypes:''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let data = {histypes:event.target.value};
        this.setState({[event.target.name]:event.target.value});/** set state hists */

        /*update config_sql data = his_type*/ 
        KnexSqlites.Update(TableNames.config_sql(), data, {access_token:Token.get_access_token("")})
        .then(res=>console.warn(res.message))
        .catch(err=>console.error(err));

        /** save his_type on server tdcwebservice */
        Api.get_save_his_type(event.target.value)
        .then(res=>{
            console.warn(res);
            /** get buffe_config webservice save to sqlite on table buffe_config */
            Api.tdc_get_buffe_config().then(res=>{
                console.info(res.his_type);
                /** update sqlite buffe_config */
                KnexSqlites.Update(TableNames.buffe_config(), res, {token:Token.get_access_token('')})
                .then(res2=>console.warn(res2))
                .catch(err=>console.error(err));
            });
        })
        .catch(err=>console.error(err));
    }
    componentWillMount() {
        console.warn('componentWillMount');
        /** query count  table  hists*/
        KnexSqlites.getCount(TableNames.hists(), { token: Token.get_access_token("") })
        .then(res=>console.warn(res)).catch(err=>console.error(err))
        /** query config_sql */
        KnexSqlites.findOne("", TableNames.config_sql(), {access_token:Token.get_access_token("")})
        .then(res=>console.warn(res)).catch(err=>console.error(err));
        this.setState({histypes:get_value_his.histypes});

        if(result.count > 0){
            /** check hists > 0 load hists  send to function resultHis*/
            KnexSqlites.Connect().select("*").from(TableNames.hists()).where({ token: Token.get_access_token("") })
            .then(res=>console.warn(res)).catch(err=>console.error(err));
            this.handleSetState(resultHis);
        }else{
            this.handleFetchHis();
        }
    }
    handleSetState(res){
        let hist_arr = this.state.hists;
        let result = res.map((v, k) => {
            hist_arr[k] = { id: v.id, his_name: v.his_name,his_type:v.his_type, token: Token.get_access_token("") }
        });
        this.setState({ hisName: hist_arr });
    }
    handleFetchHis() {
        Api.get_new_his_type().then(res => {
            this.handleSetState(res); 
            this.handleSaveHis();
        }).catch(err => console.error(err));
    }
    handleSaveHis() {
        KnexSqlites.Create(TableNames.hists(), this.state.hists)
            .then(res => console.warn(res.message))
            .catch(err => console.error(err));
    }
    render() {
        let hisOptions = this.state.hisName.map((v, k) => {
            return (<option key={k} value={v.id}>{v.his_name}</option>);
        });
        return (
            <div className="col-sm-4">
                <div className="card bg-basic">
                    <div className="card-header">Setting</div>
                    <div className="card-body">
                        <div className="form-group">
                            <Select value={this.state.histypes} optionValue={hisOptions} label="His Type" name="histypes" onChange={this.handleChange} />
                            <div>
                                <label>DbType : Oracle</label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default Form1SettingComponent;