const electron = require('electron');
const { Tray, app, Menu } = electron

class TimerTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath);

    this.mainWindow = mainWindow;
    this.setToolTip('Timer App');
    this.on('click', this.onClick.bind(this));
    this.on('right-click', this.onRightClick.bind(this));
  }

  onClick(event, bounds) {
    const { x, y } = bounds; //bounds refers to window position on OS' main window, this code gives the bounds for the onClick event

    const { height, width } = this.mainWindow.getBounds() //height and width bounds of main window

    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide();
    } else {
      const yPosition = process.platform === 'darwin' ? y : y - height; //turnary to accomodate windows OS
      this.mainWindow.setBounds({
        x: x - width / 2, //window x defines left hand side of window, not center, so subtracting half the width of the window gives a centrallised position
        y: yPosition,
        height,
        width
      });
      this.mainWindow.show();
    }
  }
  // Here we define a new Tray icon and pass it the path to the relevant files. We then define an on click function with a conditional statement using a method isVisible. The onclick will then either show or hide the window.

  onRightClick() {
    const menuConfig = Menu.buildFromTemplate([ //builds menu template, always takes array of objects
      {
        label: 'Quit',
        click: () => app.quit()
    }
    ]);
    this.popUpContextMenu(menuConfig); //base Tray class method referenced with "this"
  }
}


module.exports = TimerTray;