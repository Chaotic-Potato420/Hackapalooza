var tabs = 0;
var opened = 0;

function callback(){
    choosePic();
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

var myPix = new Array(
    "https://www.youtube.com/",
    "https://www.google.com/",
    "https://www.facebook.com/",
    "https://twitter.com/",
    "https://www.instagram.com/",
    "https://www.boredbutton.com/",
    "https://theuselessweb.com/",
    "https://www.coolmathgames.com/",
    "https://www.poptropica.com/",
    "https://littlealchemy.com/"
);

function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    window.open(myPix[randomNum],"_blank");
}
