/* File: popup.js
 * -----------------------
 * This javascript file restores settings when the DOM loads.
 * You shouldn't have to change this file unless you also
 * change the corresponding popup.html file.
 */


 // Waits for the DOM elements in the popup to load before assigning the button
 // an eventlistener of its own
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('matt').addEventListener('click', function() {
        // will execute the content script which can manipulate the page's DOM
        chrome.tabs.executeScript(null, {file: "src/content.js"});
    })
});