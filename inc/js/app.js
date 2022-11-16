//Variables
let counter = 0;

if(document.title == "Accueil - Zachary Blais")
    homePage();
else if(document.title == "Mes compétences") {
    mySkillsPage();
}



function homePage() {
    let allButton = document.querySelector('.button');
    let button = document.querySelector('.clickMe');
    let button_bottomRectangle = document.querySelector('.bottom_rectangle');
    let button_bottomCircle = document.querySelector('.bottom_circle');
    let nameH1 = document.querySelector('.name');
    let nameContainer = document.querySelector('.name_container');
    let chargingBar = document.querySelector('.chargingBar');
    let devWebP = document.querySelector('.devWebP');
    let infoContainer = document.querySelector('.info_container');
    let socialIcones = document.querySelectorAll('.social_section i');
    let body = document.querySelector('body');
    console.log(socialIcones)
    let clickCount = 0;

    let mouseDown = false;

    let colorTable = ['082032', '150050', '041C32', '321F28', '54123B', '202040', 'C70D3A', '232931', 'FF9898', '28518A'];
    console.log(document.referrer);
    if(document.referrer == "skills.html") {
        console.log('file:///D:/projet/porfolio/skills.html')
    }

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

        if (clickCount <= 5) {
            chargingBar.style.transform = "scaleX(" + 0.2 * clickCount + ")";
        }

        if (clickCount == 5) {
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

        if (clickCount > 5) {

            body.style.background = "#" + colorTable[Math.floor(Math.random() * colorTable.length)];
        }

        console.log(clickCount)
    }

    window.addEventListener('mouseup', () => {
        mouseDown = false;
        button.classList.remove('pressed');
        button_bottomRectangle.classList.remove('bottom_pressed');
    })
}

function mySkillsPage() {
    let lines =  document.querySelectorAll('.graphic_element_line .line');

    setTimeout(() => {
        lines.forEach((item, key) => {

            setTimeout(() => {
                item.classList.remove('w0');
                item.classList.remove('opacity0');
            }, 200*key);
    
        })
    }, 500);
    

    //pc section

    let nbImage = document.querySelectorAll('.pc_screen > div > div > div').length;
    let images = document.querySelectorAll('.pc_screen > div > div > div > img');
    let imagesContainer = document.querySelectorAll('.pc_screen > div > div > div');
    let imageWidth = document.querySelector('.pc_screen > div > div').offsetWidth;
    
    let pcButton = document.querySelectorAll('.pc_button');
    let pcContainer = document.querySelector('.pc_screen > div > div');
    let scrollContainer = document.querySelector('.exemple_section .pc_screen > div');
    let texts = document.querySelectorAll('.exemple_section .legend > div');
    let textWidth = document.querySelector('.exemple_section .legend').offsetWidth;
    let smallestImage = 99999;
    let textPosition = 0;

    images.forEach(item => {
        if(item.offsetHeight < smallestImage)
            smallestImage = item.offsetHeight;
    })

    console.log(smallestImage)

    imagesContainer.forEach((item, key) => {
        if(key != counter)
        item.style.height = smallestImage + "px";
    })

    pcButton.forEach(button => {
        button.addEventListener('click', (e) => {
            
            if(e.currentTarget.classList.contains('left')) {
                counter--;
                if(counter < 0)
                    counter = nbImage-1;
            }
            else if(e.currentTarget.classList.contains('right')) {
                console.log(e.currentTarget.classList.contains('right'))
                counter++;
                if(counter > nbImage-1) {
                    counter = 0;
                }
            }
            
            if(counter >= 0 && counter <= 2) {
                textPosition = 0;
            }
            else if(counter >= 3 && counter <= 6) {
                textPosition = 1
            }

            texts.forEach((item) => {
                item.style.transform = "translateX(-" + textPosition * (textWidth + 48) + "px)";
            })

            scrollContainer.scrollTop = 0;
            imagesContainer[counter].style.height = "auto";
            pcContainer.style.transform = "translateX(-" + imageWidth * counter + "px)";
            setTimeout(() => {
                imagesContainer.forEach((item, key) => {
                    if(key != counter)
                        item.style.height = smallestImage + "px";
                })
            }, 1000);
        })
        
    })
}


//Pointer follow

let delayFollow = 8;
let pointerX = 0;
let pointerY = 0;
let pointerXMini = 0;
let pointerYMini = 0;
const pointer = document.getElementById("pointer");
const pointerMini = document.getElementById("miniPointer");
let pointerVeloX = 0;
let pointerVeloY = 0;
let pointerVeloXMini = 0;
let pointerVeloYMini = 0;
let position = pointer.getBoundingClientRect();
let positionMini = pointerMini.getBoundingClientRect();

document.onmousemove = function(event) {
    pointerX = (event.clientX) - (position.width)/2;
    pointerY = (event.clientY) - (position.height)/2;
    pointerXMini = (event.clientX) - (positionMini.width)/2;
    pointerYMini = (event.clientY) - (positionMini.height)/2;
    
}





setInterval(pointerFollow, 16);

function pointerFollow()
{
    console.log(pointerX);
    
    position = pointer.getBoundingClientRect();
    positionMini = pointerMini.getBoundingClientRect();

    follow(position.left, position.top+(window.scrollY), pointerX, pointerY+(window.scrollY), positionMini.left, positionMini.top+(window.scrollY), pointerXMini, pointerYMini+(window.scrollY));


}

function follow(x, y, xTarget, yTarget, xmini, ymini, xTargetMini, yTargetMini) {
    if(x !== xTarget || y !== yTarget)
    {
        if(x < xTarget)
        {
            pointerVeloX = (xTarget - x)/delayFollow;
            if(pointerVeloX < 1 && pointerVeloX != 0)
                pointerVeloX = 1;

            if((xTarget - x) < 2 && (xTarget - x) > -2)
                pointerVeloX = 0;

        }
        else if(x > xTarget)
        {
            pointerVeloX = (x - xTarget)/delayFollow;
            if(pointerVeloX < 1 && pointerVeloX != 0)
                pointerVeloX = 1;

                if((x - xTarget) < 2 && (x - xTarget) > -2)
                pointerVeloX = 0;

                pointerVeloX *= -1;
        }

        if(y < yTarget)
        {
            pointerVeloY = (yTarget - y)/delayFollow;
            if(pointerVeloY < 1 && pointerVeloY != 0)
                pointerVeloY = 1;

            if((yTarget - y) < 2 && (yTarget - y) > -2)
                pointerVeloY = 0;

        }
        else if(y > yTarget)
        {
            pointerVeloY = (y - yTarget)/delayFollow;
            if(pointerVeloY < 1 && pointerVeloY != 0)
                pointerVeloY = 1;

            if((y - yTarget) < 2 && (y - yTarget) > -2)
                pointerVeloY = 0;

                pointerVeloY *= -1;
        }
    }



    

    if(xmini !== xTargetMini || ymini !== yTargetMini)
    {
        if(xmini < xTargetMini)
        {
            pointerVeloXMini = (xTargetMini - xmini)/(delayFollow/2);
            if(pointerVeloXMini < 1 && pointerVeloXMini != 0)
                pointerVeloXMini = 1;

            if((xTargetMini - xmini) < 2 && (xTargetMini - xmini) > -2)
                pointerVeloXMini = 0;

        }
        else if(xmini > xTargetMini)
        {
            pointerVeloXMini = (xmini - xTargetMini)/(delayFollow/2);
            if(pointerVeloXMini < 1 && pointerVeloXMini != 0)
                pointerVeloXMini = 1;

                if((xmini - xTargetMini) < 2 && (xmini - xTargetMini) > -2)
                pointerVeloXMini = 0;

                pointerVeloXMini *= -1;
        }

        if(ymini < yTargetMini)
        {
            pointerVeloYMini = (yTargetMini - ymini)/(delayFollow/2);
            if(pointerVeloYMini < 1 && pointerVeloYMini != 0)
                pointerVeloYMini = 1;

            if((yTargetMini - ymini) < 2 && (yTargetMini - ymini) > -2)
                pointerVeloYMini = 0;

        }
        else if(ymini > yTargetMini)
        {
            pointerVeloYMini = (ymini - yTargetMini)/(delayFollow/2);
            if(pointerVeloYMini < 1 && pointerVeloYMini != 0)
                pointerVeloYMini = 1;

            if((ymini - yTargetMini) < 2 && (ymini - yTargetMini) > -2)
                pointerVeloYMini = 0;

                pointerVeloYMini *= -1;
        }
    }

    pointerMini.style.left = xmini + pointerVeloXMini + "px";
    pointerMini.style.top = ymini + pointerVeloYMini + "px";
    pointer.style.left = x + pointerVeloX + "px";
    pointer.style.top = y + pointerVeloY + "px";

}

