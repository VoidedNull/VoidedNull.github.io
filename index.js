function OpenInNewTabWinBrowser() {
    var win = window.open('https://github.com/VoidedNull/', '_blank');
    win.focus();
}

function Dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }