if (chrome.extension.inIncognitoContext || window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // https://stackoverflow.com/a/14070152/10658294
    if (document.styleSheets.length == 0) {
        document.head.appendChild(document.createElement("style"));
    } 
    document.styleSheets[0].insertRule("body { background-color: rgb(53, 54, 58) !important; }", 0);
}