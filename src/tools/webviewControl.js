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
    webContent.setAttribute("style", "height: 100vh; width: calc(100% - 4em);")
    webContent.setAttribute("src", url)
    return
}

function openWebContentDevTools() {
    webContent.openDevTools()
}