// var new_element = document.createElement("script");
// new_element.setAttribute("type", "text/javascript");
// url = chrome.extension.getURL("./insert.js")
// new_element.setAttribute("src", url);
// console.log(url)
// document.body.appendChild(new_element);
function injectCustomJs(jsPath)
{
    jsPath = jsPath || 'js/insert.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    
    temp.src = chrome.extension.getURL(jsPath);

    document.body.appendChild(temp);
}
if (window.location.href.indexOf('attop.com/wk/learn') > -1) {
	injectCustomJs()
}
