const path = require('path');
const electron = require('electron');
const TimerTray = require('./app/timer-tray');
const MainWindow = require('./app/main-window');
const { app, BrowserWindow, Tray } = electron;

let mainWindow;
let tray;

app.on('ready', () => {
  app.dock.hide(); //hides dock icon
  mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);
 

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);

  tray = new TimerTray(iconPath, mainWindow);


});

