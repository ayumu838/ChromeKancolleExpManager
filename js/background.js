function screenshot() {
    chrome.tabs.captureVisibleTab(null, { format: "png"}, function (url) {
        // console.log(url);
        chrome.runtime.sendMessage({ mode: 'drawimage',data: url}, function(res) {});

    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.mode) {
        case 'execCapture':
            screenshot();
            break;
    }
});