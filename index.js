function OpenInNewTabWinBrowser() {
    var win = window.open('https://github.com/VoidedNull/', '_blank');
    win.focus();
}

function Dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 const checkbox = document.getElementById('input');
 const svg1 = document.getElementById('moon');
 const svg2 = document.getElementById('sun');
 
 checkbox.addEventListener('change', function() {
   if (this.checked) {
     svg1.classList.add('invisible'); // Add the 'invisible' class to svg1
     svg2.classList.add('invisible'); // Add the 'invisible' class to svg2
   } else {
     svg1.classList.remove('invisible'); // Remove the 'invisible' class from svg1
     svg2.classList.add('invisible'); // Add the 'invisible' class to svg2
   }
 });