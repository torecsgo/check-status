const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

// Top Menu
const TopMenu = require('./menu.js');
const menu = Menu.buildFromTemplate(TopMenu)
new Menu.setApplicationMenu(menu)

// Crear APP
function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile(path.join(__dirname, 'windows/index.html'))
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})