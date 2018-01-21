const path = require('path');
const electron = require('electron');
const { app, BrowserWindow, Tray } = electron;

let mainWindow;
let tray;

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

  tray = new Tray(iconPath);
  tray.on('click', (event, bounds) => {
    const { x, y } = bounds; //bounds refers to window position on OS' main window, this code gives the bounds for the onClick event

    const { height, width } = mainWindow.getBounds() //height and width bounds of main window

    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.setBounds({
        x: x - width /  2, //window x defines left hand side of window, not center, so subtracting half the width of the window gives a centrallised position
        y,
        height,
        width
      })
      mainWindow.show();
    }
  })
  // Here we define a new Tray icon and pass it the path to the relevant files. We then define an on click function with a conditional statement using a method isVisible. The onclick will then either show or hide the window.
});

