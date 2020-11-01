function onCreated(tab) {
  console.log('Created new tab: ${tab.id}')
}

function onError(error) {
  console.log('Error: ${error}');
}

browser.browserAction.onClicked.addListener(function() {
  browser.tabs.query({currentWindow: true, active:true}).then(queryInfo => {
    browser.tabs.get(queryInfo[0].id).then(tab => {
      var tabUrl = tab.url;
  var creating = browser.tabs.create({
    url:"https://wikirank.net/go.php?articlename="+tabUrl
  });
  creating.then(onCreated, onError);
      browser.tabs.update(tab.id, {url: updUrl});    
    });
  });
  
  

});