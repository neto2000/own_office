const { app, BrowserWindow } = require("electron");
const url = require("url");

function newApp() {
  win = new BrowserWindow();
  win.loadURL(
    url.format({
      pathname: "index.html",
      slashes: true
    })
  );
  console.log("hello world!")

}

app.on("ready", newApp);