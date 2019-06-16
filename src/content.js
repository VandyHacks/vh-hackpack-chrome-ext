// chrome.storage.onChanged.addListener(function(changes) {
//     var action = changes['action'];
//     if(action.newValue === 'executeCode') {
//         // YOUR CODE HERE
//         let picture = chrome.runtime.getURL('src/image.jpg');
//         var images = document.getElementsByTagName("img");
//         console.log(picture)
//         console.log(images)
//         console.log('matt')
//         for (let i = 0; i < images.length; i++) {
//             images[i].setAttribute('src', picture)
//         }
//     }
// });

// Converts a relative path within an app/extension install directory to a fully-qualified URL.
let picture = chrome.runtime.getURL('src/image.jpg');
// Gets all the images on the page by tag
var images = document.getElementsByTagName("img");
// Changes the source of all the image elements to the desired image source
for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('src', picture)
}