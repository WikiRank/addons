chrome.browserAction.onClicked.addListener(function() {
chrome.tabs.getSelected(null, function(tab) {

      var tabUrl = tab.url;
  chrome.tabs.create({
    'url':"https://wikirank.net/go.php?articlename="+tabUrl
  });   
    });
  });
  
  