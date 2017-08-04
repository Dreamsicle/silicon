// see https://stackoverflow.com/a/38063486
function cssEngine(rule) {
    var css = document.createElement('style')
    css.type = 'text/css'
    css.appendChild(document.createTextNode(rule))
    document.getElementsByTagName("head")[0].appendChild(css)
}

// CSS rules
var rule  = "@import url('https://fonts.googleapis.com/css?family=Rubik:400,700'); html { font-family: 'Rubik'; } body { font-family: 'Rubik'; }"
    

// Load the rules and execute after the DOM loads
window.onload = function() {cssEngine(rule)};