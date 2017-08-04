function redirectToPage(url) {
    if (url.substr(4) !== 'http') {
        url = "http://" + url
    }
    window.location.replace(url)
    return
}