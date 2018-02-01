const os = require("os");
const osUtils = require('os-utils');

get_total_ram_mb=()=>{ //total ram
    return os.totalmem() / 1024 / 1024;;
}
get_free_ram_mb=()=>{//free ram
    return os.freemem() / 1024 / 1024;
}
get_usege=()=>{ //usege ram 
    return get_total_ram_mb() - get_free_ram_mb();
}
get_cpu_app=()=>{//cpu app
    return process.getCPUUsage();
}
get_ram_app=()=>{//ram app
    return ((process.getProcessMemoryInfo().workingSetSize / 1024) * 100) / get_total_ram_mb()
}
exports.get_ram_total=()=>{//ram total
    let pc = {
        ramTotal:(get_usege() * 100 / get_total_ram_mb()),
        ramApp:get_usege()
    }
    return pc;
}

get_cpu= ()=>{
    return new Promise((resolve, reject) => {
        osUtils.cpuUsage((v) => {
            resolve(v * 100);
        });
    });
}