// define currentWindow so we can control the app from the chrome
const {BrowserWindow} = require('electron').remote
var currentWindow = BrowserWindow.getFocusedWindow()

// these must be defined separately for some reason or it crashes
const {app, globalShortcut} = require('electron').remote

// make keyboard shorcuts and overrides not a terrible experience
var hotkey = require('electron').remote.require('electron-hotkey')

// finally, define webContent
var webContent = document.getElementById("webContent")


// define shortcuts
hotkey.register('local', 'CommandOrControl+R', 'refresh')

// act on defined shortcuts
app.on('shortcut-pressed', (event) => {

    if (event === 'refresh') {
        navigatorControl('refresh')
    }

})