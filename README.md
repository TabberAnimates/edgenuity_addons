# Welcome to Edgenuity Addons!

Edgenuity Addons is a bookmarklet that allows you to add custom buttons to the edgenuity video player (There are a lot of bugs but they do work!).
In this .md file, I will show you how to add, and use this amazing peice of javascript trickery.

## One: How to install

The bookmark is like any other bookmark let. Just make a new bookmark, replace the web address with this code here:
`javascript:x=document.createElement("script");x.src="https://tabberanimates.github.io/edgenuity_addons/api.js"; void document.getElementsByTagName("head")[0].appendChild(x);`
(Note this may change. This may become an extension though 💀)
Once you have it installed, you can now use it here: https://r08.core.learn.edgenuity.com/Player/ (It has no quiz compatibility yet :( )
Now lets get into the features and how to use them.

## Skip Button

The skip button acts how you think it does. It skips to the next video. Pretty simple.

## Auto-completion (In Development)

This addon is still in development, but what it will do when finished, is allow you to skip to any part of the lesson, whenever you like. It's a bit buggy though.

## Up Coming Features

Some planned upcoming features would be:
- A skip forward and backward 5 second buttons
- A question finder
- Custom Css
- Bug fixes
- API variable access

And much more!

## Behind the Code

So how this entire thing even works is kind of complicated. The video player is in an iframe, where all the juicy code is, such as the API of the player.
The bookmarklet imports buttons into that iframe, allowing those buttons to do whatever they want inside of it. The current set of buttons takes advantage of the
FrameChain system to control the skipping functions. The FrameChain system tells the player which video the student is one, if they can go to the next video, and many
other things. These buttons use an array that stores which videos you've completed and which ones you haven't. The buttons edit said array to do the actions they're
programmed to do.
