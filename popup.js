
chrome.runtime.sendMessage('get-user-data', (response) => {
    console.log('received user data', response);
    document.getElementById("tabClosed").innerHTML = "Tabs attempted to close today: " + response;
})
