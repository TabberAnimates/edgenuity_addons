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

createIframeElement('<style>.hacks { background-color: #1d7186; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; font-family: Arial, Helvetica, sans-serif; border-radius: 8px; transition-duration: 0.4s; } .hacks:hover { background-color: #6BC5DB; /* Teal */ color: white; }</style>');

// Button 1

createIframeElement(`<button class="hacks" onclick="let array = API.FrameChain.framesStatus; let result = array.splice(array.indexOf('incomplete'), 1, 'complete'); API.FrameChain.framesStatus = array; API.FrameChain.openFrame(API.FrameChain.currentFrame + 1);">Skip Video</button>`);

// Button 2

createIframeElement(`<button onclick="let array = API.FrameChain.frameStatus; for (var i = 0; i < array.length; i++) { if (array[i] == 'incomplete') { array[i] = 'complete'; } } API.FrameChain.frameStatus = array;">Auto Completion (WIP)</button>`);
