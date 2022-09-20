let button = document.querySelector('.clickMe');
let button_bottom = document.querySelector('.bottom_rectangle');
let nameH1 = document.querySelector('.name');
let devWebP = document.querySelector('.devWebP');
let infoContainer = document.querySelector('.info_container');
let socialBar = document.querySelector('.bar');
let socialIcones = document.querySelectorAll('.social_section i');
let body = document.querySelector('body');
console.log(socialIcones)
let clickCount = 0;

let mouseDown = false;

let colorTable = ['082032', '150050', '041C32', '321F28', '54123B', '202040', 'C70D3A', '232931', 'FF9898', '28518A'];

button.addEventListener('mousedown', () => {
    button.classList.add('pressed');
    button_bottom.classList.add('bottom_pressed');
    clickCount++;

    if(clickCount <= 5) {
        nameH1.style.transform = "scale("+ 0.2 * clickCount +", 0.5)";
    }

    if(clickCount == 6) {
        devWebP.classList.add('devMove');
        setTimeout(() => {
            nameH1.classList.add('appear')
        }, 500);
        
    }

    if(clickCount == 7) {
        infoContainer.classList.add('infoAppear');
    }

    if(clickCount == 8) {
        let cooldown = 0;
        if(window.innerWidth < 1000) {
            cooldown = 1500;
        }
        socialBar.classList.add('socialMove');
        setTimeout(() => {
            socialIcones[0].classList.remove('displayNone');
        }, 1500 - cooldown);
        setTimeout(() => {
            socialIcones[1].classList.remove('displayNone');
        }, 1650 - cooldown);
        setTimeout(() => {
            socialIcones[2].classList.remove('displayNone');
        }, 1800 - cooldown);
    }

    if(clickCount > 8) {
        body.style.background = "#"+colorTable[Math.floor(Math.random() * colorTable.length)];
    }

    console.log(clickCount)
})

window.addEventListener('mouseup', () => {
    mouseDown = false;
    button.classList.remove('pressed');
    button_bottom.classList.remove('bottom_pressed');
})

