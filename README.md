# Mattify: Chrome Extension Hackpack @ VandyHacks VI 2019

## Overview

In this hackpack, you will build a chrome extension that replaces all the images on a webpage with a given image. The image in mind for this hackpack will replace all images with the face of one of our fearless leaders, Matt Leon.

It will use Javascript and HTML to be able to edit the elements and their properties on a webpage. This hackpack will also include some commented-out code that is not actually utilized but can serve as a possible alternative way to achieve the same goal.

## Getting Started

### Download the code and other tools

You will need Google Chrome to test and use this extension.

To get the code either:

1. Download and unzip the zip file
2. Git clone the code

Both will options can be done by clicking the green button in the top right:

![Getting Code](https://i.imgur.com/LOc3LBG.png)

You will also need an editor to change the code! Some easy-to-use options include:

1. <a href="https://code.visualstudio.com/">VSCode</a>
2. <a href="https://www.sublimetext.com/">Sublime</a>

### Load Starter Code

Chrome usually ships extensions as `.crx` files (similar to `.zip` files), which is great for distribution, but not so great for developing. Instead, we'll tell Chrome to treat the starter code folder as an extension.

We need to enable Chrome Developer Settings in order to build our chrome extension.

In order to do this:

1. Navigate to [chrome://extensions](chrome://extensions) in your browser.
2. Ensure that the **Developer mode** checkbox in the top right-hand corner is checked.
3. Click **Load unpacked extension...** to pop up a file-selection dialog.
4. Navigate to the directory in which your extension files live, and select it.

You should now see a screen that looks like the below:

![Loading Starter Code](https://i.imgur.com/Y7ARknT.png)

Note that the **Developer mode** checkbox is checked, and the extension is enabled.

Additionally, pay close attention to the **Reload** link.

**By default, Chrome will _not_ reload your extension automatically if you update your code. Thus, if you want to test your extension, you _must_ reload the extension before testing. Otherwise, your changes will _not_ be present in the active extension.** Basically, every time you make a change to your code that you want to test live in Chrome, make sure to reload the extension using that **Reload** button.

#### The Basics of Chrome Extensions

What are Chrome Extensions?

> Extensions are small software programs that can modify and enhance the functionality of the Chrome browser. You write them using web technologies such as HTML, JavaScript, and CSS.

If you want to learn more about Chrome Extensions, read through Google's [introduction](https://developer.chrome.com/extensions) to extensions and Google's high-level [overview](https://developer.chrome.com/extensions/overview).

## What does each file do?

Here are brief descriptions of each file. Feel free to take a look into a specific file to get a better understanding for the why each line was included in there.

**manifest.json**
Here you will be outlining the properties of your extension. This is where you will name your extension as well as provide it with a description, a set of icons, and define actions/permissions related to the purpose of your extension.

**src/popup.html**
This is the html code for the little window popup that appears when you click on the extension icon! In this file, you can edit and customize the contents of that popup window by giving it text, more icons, and even buttons. For our purpose, we are including a button to trigger an action.

**src/popup.js**
This file will allow you inject javascript code into your popup window. We are using this file to add an event listener to the button we added in popup.html. This listener will then execute another javascript file whenever the button is clicked.

**src/content.js**
Unlike the other files we've talked about, this file will actually be able to change contents of your webpage. This is because this of how we call this file from popup.js as we are executing this inside the chrome tab AKA the current webpage whenever we click the popup button.

The contents of this file includes finding all the images on a page and switching them out for Matt's face.

**src/mattify.jpg**
This is the image file that we will replace all webpage images with.

**icons**
The icons folder is used to help contain all our chrome extension icons and their various sizes. We included plain icons of various sizes so feel free to edit any of them to fit your needs.

### Credit

Inspiration for this hackpack came from TreeHack's chrome extension: https://github.com/TreeHacks/hackpack-chrome-ext
