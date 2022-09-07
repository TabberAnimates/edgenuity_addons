// Iframe Element Adder

function createIframeElement(contents) {
    var value = contents;
    var doc = document.getElementById('stageFrame');
    
    var ifrDoc = doc.contentWindow || doc.contentDocument;
    if (ifrDoc.document) ifrDoc = ifrDoc.document;
    
    
    var elem = ifrDoc.createElement("div");
    elem.innerHTML = value;
    ifrDoc.body.appendChild(elem);
}

// Style

createIframeElement('<style src="//tabberanimates.github.io/edgenuity_addons/style.css"></style>');

// Button 1

createIframeElement(`<button class="hacks" onclick="let array = API.FrameChain.framesStatus; let result = array.splice(array.indexOf('incomplete'), 1, 'complete'); API.FrameChain.framesStatus = array; API.FrameChain.openFrame(API.FrameChain.currentFrame + 1);">Skip Video</button>`);

// Button 2

createIframeElement(`<button class="hacks" onclick="let array = API.FrameChain.framesStatus; for (var i = 0; i < array.length; i++) { if (array[i] == 'incomplete') { array[i] = 'complete'; } } API.FrameChain.frameStatus = array;">Auto Completion (In Development)</button>`);

