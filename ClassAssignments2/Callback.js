  let browser = "Chrome";  
  
  function checkBrowserVersion(browser,browserVersion)
  {
    setTimeout(()=>{
        console.log('This is delayed by 2 seconds');
        browserVersion(browser)
    },2000);
  }
 function browserVersion(browser)
  {
    console.log('browser version is '+browser);
  }

  checkBrowserVersion(browser,browserVersion);