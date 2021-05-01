const {BrowserWindow, app, ipcMain, Notification} = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

function createWindow(){
    const win = new BrowserWindow({
        width: 640,
        height: 520,
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

 // options menu when user left-click on icon
app.setUserTasks([
    {
      program: process.execPath,
      arguments: '--new-window',
      iconPath: process.execPath,
      iconIndex: 0,
      title: 'Nova Janela',
      description: 'Crie uma nova janela'
    }
  ])

  // to update on changes
if (isDev){
    require('electron-reload')(__dirname,{
        electron: path.join(__dirname,'node-modules','.bin','electron')
    })
}

 // to send notifications to Windows Users
ipcMain.on('notify',(e,message)=>{
    new Notification({title:'Opa!',body: message}).show();
})

app.whenReady().then(createWindow);