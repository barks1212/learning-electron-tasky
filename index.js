const path = require('path');
const electron = require('electron');
const TimerTray = require('./app/timer-tray');
const { app, BrowserWindow, Tray } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 300,
    frame: false, //removes status bar at top of app
    resizable: false, //does not allow user to resize app window
    show: false, //by default, doesnt show main window to user
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`)

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);

  new TimerTray(iconPath, mainWindow);


});

