const menu = document.querySelector('.menu-context');


function removeMenu() {
    menu.style.left = '-9999px';
    menu.style.top = '-9999px';
}

function rightButton(e) {
    e.preventDefault();

    if (e.button === 2) {
        menu.style.left = e.pageX + 10 + 'px';
        menu.style.top = e.pageY + 10 + 'px';
    }
}


const block = document.querySelector('#right');
block.addEventListener('mousedown', rightButton);

block.addEventListener('contextmenu', function(e) { 
    e.preventDefault();
}); //turns off default menu
