const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    resizable: false,
    width: 380,
    height: 530,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });
  win.setMenu(null);
  win.loadFile(path.join(__dirname, '../gui/main-window/index.html'))
}

app.whenReady().then(createWindow);
