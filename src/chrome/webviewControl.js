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
    if (url.substr(8) !== 'https://' || url.substr(7) !== 'http://') {
        url = "http://" + url
    }
    webContent.setAttribute("src", url)
    return
}

function openWebContentDevTools() {
    webContent.openDevTools()
}

/* init webContent, this should be replaced an actual new tab page */
webContent.setAttribute("src", "../newTab/index.html")

