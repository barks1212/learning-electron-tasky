const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor(url) {
    super({
      height: 500,
      width: 300,
      frame: false, //removes status bar at top of app
      resizable: false, //does not allow user to resize app window
      show: false, //by default, doesnt show main window to user
    });
    this.loadURL(url);
    this.on('blur', this.onBlur.bind(this));
  }

  onBlur() {
    this.hide(); //hides app on blur
  }
}

module.exports = MainWindow;