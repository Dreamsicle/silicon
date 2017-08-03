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

function openWebContentDevTools() {
    webContent.openDevTools()
}

// init webcontent
webContent.setAttribute("src", '../newTab/index.html')

webContent.addEventListener('load-commit', (url) => {
    // do some stuff here eventually
})