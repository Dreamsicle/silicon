var webContent = document.getElementById("webContent")

/* init webContent, this should be replaced an actual new tab page */
webContent.setAttribute("src", "https://reddit.com")

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