// var vs let vs const Learning 

//var browserVersion = "Safari";
let browserVersion = "Firefox"; // global declaration
//const browserVersion='Chrome'; //global declaration
function getBrowserVersion(browserVersion){
if (browserVersion==='Chrome')
{
    browserVersion='Chromium version'
}
else if (browserVersion==='Firefox')
{
    browserVersion='Firefox Version'
}
else{
    browserVersion='Safari Version'
}
console.log('BrowserVersion is ' +browserVersion)
}
getBrowserVersion(browserVersion)

