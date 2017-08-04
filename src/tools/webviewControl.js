var webContent = document.getElementById("webContent")

function navigatorControl(typeOfRequest) {
    switch (typeOfRequest) {

        case 'back':
            webContent.goBack()
            break
        
        case 'forwards':
            webContent.goForward()
            break

        case 'refresh':
            webContent.stop()
            webContent.reload()
    }
    
    return
}

function goToUrl(url) {
    if (url.substr(4) !== 'http') {
        url = "http://" + url
    }
    webContent.setAttribute("src", url)
    return
}

function goToUrlNoCheck(url) {
    webContent.setAttribute("src", url)
    return
}

function openWebContentDevTools() {
    webContent.openDevTools()
}

// init webcontent
webContent.setAttribute("src", '../newTab/index.html')

webContent.addEventListener('load-commit', (url) => {
    // do some stuff here eventually
})

webContent.addEventListener('enter-html-full-screen', (url) => {
    document.getElementById("sideBar").style.display = "none" 
    webContent.style.left = "0"
    webContent.style.width = "100%"
})

webContent.addEventListener('leave-html-full-screen', (url) => {
    document.getElementById("sideBar").style.display = "block" 
    webContent.style.left = "4em"
    webContent.style.width = "calc(100% - 4em)"
})

webContent.addEventListener('did-change-theme-color', (bgColor) => {
    var bgColor = bgColor.themeColor

    /* catch if the site doesn't have theme color defined */
    if (bgColor == '#000000') {
        document.getElementById("sideBar").setAttribute("style", "background-color: #1F2B32")
        return
    }

    document.getElementById("sideBar").setAttribute("style", "background-color: " + bgColor + " !important")
    console.log(bgColor)
})