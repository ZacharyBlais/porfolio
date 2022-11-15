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
    let imageWidth = document.querySelector('.pc_screen > div > div').offsetWidth;
    
    let pcButton = document.querySelectorAll('.pc_button');
    let pcContainer = document.querySelector('.pc_screen > div > div');

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
                console.log(nbImage)
                if(counter > nbImage-1) {
                    counter = 0;
                }
            }
            console.log(counter);
            pcContainer.style.transform = "translateX(-" + imageWidth * counter + "px)";
        })
        
    })
}

