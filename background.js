var tabs = 0;

function callback(){
    window.open("https://www.google.com/","_blank");
    tabs +=1;
    if (tabs == 10){
        alert("DISCO PARTY!!!!!!!!")
        window.open('assets/disco.gif', 'popup_name','height=' + screen.height + ',width=' + screen.width + ',resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=yes')
        tabs = 0;
    }
};

window.onload = function(){
    tabs = 0;
    chrome.tabs.onRemoved.addListener(callback);
}
