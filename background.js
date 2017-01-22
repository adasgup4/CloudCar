// Called when the user clicks on the browser action.
/*chrome.browserAction.onClicked.addListener(function(tab)
{
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});

chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse){
        if (request.message === "open_new_tab"){
            chrome.tabs.create({"url":request.url});
        }
    }
);*/

/*setInterval(function(){
    var element = $(':hover');
    if(element.length)
    {
        var domElement = element[element.length - 1];
        var tagName = domElement.tagName;
        var id = domElement.id ? ' id="' + domElement.id + '"' : "";
        if (tagName.toLowerCase() == "img"){
            console.log(domElement);
//                console.log ( 'img detected' );
            createPopup(domElement);

        }
    }
});

function createPopup(image){
    $(image, ".image_hover_bg").hover(

        function () {
            $(".image_hover_bg").stop().slideDown(100);
        }, function () {
            $(".image_hover_bgt").stop().slideUp(100);
        });
};

$(document).ready(function()
{
    var href = $('.image_hover_bg').attr('href');
    window.location.href = href; //causes the browser to refresh and load the requested url
});*/