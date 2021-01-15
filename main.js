const {BrowserWindow, app, ipcMain, Notification} = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

function createWindow(){
    const win = new BrowserWindow({
        width: 980,
        height: 640,
        backgroundColor: 'white',
        icon: '',
        webPreferences:{
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname,'preload.js')
        }
    })

    win.loadFile('index.html');
}
if (isDev){
    require('electron-reload')(__dirname,{
        electron: path.join(__dirname,'node-modules','.bin','electron')
    })
}

ipcMain.on('notify',(e,message)=>{
    new Notification({title:'Ei!',body: message}).show();
})

app.whenReady().then(createWindow);