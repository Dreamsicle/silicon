// define currentWindow so we can control the app from the chrome
const {BrowserWindow} = require('electron').remote
var currentWindow = BrowserWindow.getFocusedWindow()