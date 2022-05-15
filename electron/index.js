const { app, BrowserWindow } = require("electron");

//vllt eher rust und tauri als electron wegen langer ladezeiten

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}


app.whenReady().then(() => {
  createWindow()
})