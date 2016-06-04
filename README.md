# Recline - REST Client

Recline is a minimal `Rest client`. It supports:
  - GET  
  - POST
  - PUT
  - DELETE
## Tools Used
`Angular.JS` is used to make REST calls.  
`Bootstrap` is used to style form elements.  
`node.JS` was used as backen for initial testing.  
`Tidy_Html` is used to clean the HTML response recieved(It has some issues with displaying tidy_html in div, will fix it asap). The page doesnt tidy any JSON or XML or any other response formats.  
## How to use:  
RECLINE is a chrome extension. Follow the below steps to add it to chrome.  
Download `Recline.crx` from `/build/`. Add it to chrome.  
OR  
1. Clone the Repo on local drive.
2. Goto [chrome://extensions/](chrome://extensions).
3. Enable `Developer Mode`
4. Click on `Load unpacked extension..`
5. Locate cloned Repo and select the folder.
6. You are good to go.

Ill be posting a packed version of extension soon.  
Once the app is installed, its straight forward. Select a REST method, enter the URL of Rest Server, add paramaters (`+` button) and click send. Status and response data will be displayed.