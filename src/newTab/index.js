function redirectToPage(url) {
    if (url.substr(4) !== 'http') {
        url = "http://" + url
    }
    window.location.href = url
    return
}