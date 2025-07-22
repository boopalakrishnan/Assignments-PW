//Classroom Assignment: Conditional Statements
let browserName ='Safari'
let testType='regression'
function launchBrowse(browserName)
{
if (browserName === 'Chrome')
{
    console.log('BrowserName is '+browserName);  
}
else if(browserName === 'Safari')
{
   console.log('BrowserName is '+browserName);  
}
else 
{
    console.log('BrowserName is not Chrome or Safari');
}
}
function runTests(testType)
{
switch (true)
{
    case testType ==='smoke':
    console.log('Testtype is '+testType);
    break;
    
    case testType ==='regression':
      console.log('Testtype is '+testType);
        break;
    
    case testType ==='sanity':
      console.log('Testtype is '+testType);
        break;
    default:
        console.log('Testtype is Smoke');     
}
}
launchBrowse(browserName)
runTests(testType)