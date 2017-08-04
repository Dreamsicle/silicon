# Project Silicon

## Running
*Make sure you have Node, NPM, and Git installed!*

### Initial Setup

1. Clone the Git repo: `git clone https://github.com/Dreamsicle/silicon.git`

2. Enter the directory

3. Run `npm install --only=dev`

---
1. Pull the Git repo to ensure you have the latest changes: `git pull`

2. Run `npm start`

### Compiling

1. Follow the inital setup

2. Run `electron-forge package`

This drops an executable in `out/YourPlatformHere/`.

### Note on development with Visual Studio Code

We've added a `launch.json` to the root of the repo, so you can use VS Code's great built-in debugging! Just open the repo in VS Code and press Ctrl+Shift+D to switch to the debug tab. From there, press the play button in the dropdown to start Project Silicon with debugging features.