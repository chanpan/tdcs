import electron from "electron";
const ipcMain = electron.ipcMain;
const ipcRenderer = electron.ipcRenderer;
const remote = electron.remote;
const app = electron.remote.app;
const win = remote.getCurrentWindow();
const electronVersion = process.versions.electron;

export default class ElectronIpc {
  static Start(){
        //    setInterval(()=>{
    ipcRenderer.send("Start");

        // ipcRenderer.on("test-func", (event, arg) => {
        // this.setState({
        //     pcs: { ram_total: arg.ramTotal.toFixed(1) }
        // });
        // if (arg.ramTotal <= 60) {
        // } else if (arg.ramTotal > 60 && arg.ramTotal <= 80) {
        // }
        // });
        // this.logBytes(Object.entries(process.memoryUsage()));
        //    },300);
  }
//   logBytes(data) {
//     let totalRam = 0;
//     data.map(datas => {
//       totalRam += datas[1];
//     });
//   }
}
