const { app, BrowserWindow } = require('electron');

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
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
