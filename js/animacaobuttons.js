const buttonLeft = document.getElementById('button_left');
const buttonRight = document.getElementById('button_right');
const container = document.getElementById('container');




function animationButtons () {
    buttonLeft.style.animationName = 'buttonLeftMoviment';
    buttonRight.style.animationName = 'buttonRightMoviment';
}

function animationButtonsOpacity () {
    buttonLeft.style.animationName = 'hiddenButtonLeft';
    buttonRight.style.animationName = 'hiddenButtonRight';
}


container.addEventListener('mouseover', animationButtons);
container.addEventListener('mouseout', animationButtonsOpacity);

