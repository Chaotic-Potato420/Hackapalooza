var tabs = 0;
let closed = 0;
var audio = new Audio("assets/msc.mp3");

function callback(){
    choosePic();
    tabs +=1;
    closed +=1;
    audio.pause();
    if (tabs == 10){
        alert("DISCO PARTY!!!!!!!!")
        window.open('assets/disco.gif', 'popup_name','height=' + screen.height + ',width=' + screen.width + ',resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=yes')
        audio.play();
        localStorage.setItem("vOneLocalStorage", closed); 
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

chrome.runtime.onMessage.addListener((message,_sender, sendResponse) => {
    if (message === 'get-user-data'){
        sendResponse(closed);
    }
});
