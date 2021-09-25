
var tabs = 0;

function callback(){
    window.open("https://www.google.com/","_blank");
    tabs +=1;
    if (tabs == 10){
        alert("disco party!!");
    }
};

window.onload = function(){
    chrome.tabs.onRemoved.addListener(callback);
}
