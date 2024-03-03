

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
const maxheight = window.innerHeight - 40;
const maxwidth = window.innerWidth - 150;


no_button.addEventListener('mouseover', () => {
   //change mouse position by hovering over the no button
    let x = Math.floor(Math.random() * maxwidth);
    let y = Math.floor(Math.random() * maxheight);
    no_button.style.top = y + "px";
    no_button.style.left = x + "px";   
});


yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "elements/img/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}
