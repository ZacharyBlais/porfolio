let allButton = document.querySelector('.button');
let button = document.querySelector('.clickMe');
let button_bottomRectangle = document.querySelector('.bottom_rectangle');
let button_bottomCircle = document.querySelector('.bottom_circle');
let nameH1 = document.querySelector('.name');
let nameContainer = document.querySelector('.name_container');
let chargingBar = document.querySelector('.chargingBar');
let devWebP = document.querySelector('.devWebP');
let infoContainer = document.querySelector('.info_container');
let socialBar = document.querySelector('.bar');
let socialIcones = document.querySelectorAll('.social_section i');
let body = document.querySelector('body');
console.log(socialIcones)
let clickCount = 0;

let mouseDown = false;

let colorTable = ['082032', '150050', '041C32', '321F28', '54123B', '202040', 'C70D3A', '232931', 'FF9898', '28518A'];


window.addEventListener('load', () => {
    setTimeout(() => {
        nameContainer.classList.remove('w0');
        button.classList.add('spawnButton');
        allButton.classList.remove('opacity0')
    }, 500);
    setTimeout(() => {
        button_bottomRectangle.classList.remove('opacity0');
        button_bottomRectangle.classList.add('spawnBottomButton');
        button_bottomCircle.classList.add('spawnBottomButtonNext')
    }, 1500);
    setTimeout(() => {
        button.style.cursor = "pointer";
        button.addEventListener('mousedown', pressed);
    }, 2500)
});
    





function pressed() {
    button.classList.add('pressed');
    button_bottomRectangle.classList.add('bottom_pressed');
    clickCount++;

    if(clickCount <= 5) {
        chargingBar.style.transform = "scaleX("+ 0.2 * clickCount +")";
    }

    if(clickCount == 5) {
        setTimeout(() => {
            devWebP.classList.add("devMove")
            nameH1.parentElement.style.border = "none";
        }, 500)
        setTimeout(() => {
            nameH1.classList.add('appear')
            chargingBar.style.transformOrigin = "right";
            chargingBar.style.transform = "scaleX(0)";
            
        }, 1000);
        setTimeout(() => {
            infoContainer.classList.add('infoAppear');
            socialIcones.forEach(item => {
                item.classList.remove('opacity0');
            })
        }, 1300);
        
    }

    if(clickCount > 5) {

        body.style.background = "#"+colorTable[Math.floor(Math.random() * colorTable.length)];
    }

    console.log(clickCount)
}

window.addEventListener('mouseup', () => {
    mouseDown = false;
    button.classList.remove('pressed');
    button_bottomRectangle.classList.remove('bottom_pressed');
})

