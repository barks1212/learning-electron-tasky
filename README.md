### Getting started

`npm install`

Start dev server:

`npm start`

In a new terminal window:

`npm run electron`

### How it works

The idea behind this app is that it is intended to be a taskbar app meant to run in the background that adds tasks and sets a timer within which they are meant to be completed.

For this app I had to create a new icon in the tray and speccing the main window of the app to be a certain size and appear to directly drop down from the tray no matter where the users tray is.

To expand on that, on OSX the tray icons are located on the upper right of the screen. On windows, by default they are lower left but the user can change this to wherever they please. This edge case is catered for with the electron code written here.

Other functionality includes a running timer used by backing down background throttling and removing icons from the dock to give the impression that this is a background app.

Also kept good housekeeping by extracting various functionality into sub classes.