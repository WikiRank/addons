document.body.classList.add("wikirank-visited");
chrome.browserAction.onClicked.addListener(function() {
chrome.tabs.getSelected(null, function(tab) {
var langz = chrome.i18n.getUILanguage();
var aditoUrl="";
if (langz=="pl") {aditoUrl="pl.";}
else if (langz=="ru") {aditoUrl="ru.";}
var tabUrl = tab.url;
if (tabUrl.match(/h?t?t?p?s?:?\/?\/?[a-z]{2}[.]m?[.]?wikipedia[.]org\/wiki\/.+/g)) {
  chrome.tabs.create({
    'url':"https://"+aditoUrl+"wikirank.net/go.php?articlename="+tabUrl
  }); 
} else {
if (langz=="pl") {alert("Ta strona nie jest artykułem Wikipedii");}
else if (langz=="ru") {alert("Эта страница не является статьей Википедии");}
else {alert("This page is not a Wikipedia article");}

}
});
});


  
  