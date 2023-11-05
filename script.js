//your JS code here. If required.
//your JS code here. If required.
// Get the browser name and version from the navigator object
const browserName = navigator.appName;
const version = navigator.appVersion;

// Create a message with the browser information
const message = "You are using " + browserName + " version " + version;

// Get the 'browser-info' div element and set its innerHTML to the message
const browserInfoDiv = document.getElementById("browser-info");
browserInfoDiv.innerHTML = message;
