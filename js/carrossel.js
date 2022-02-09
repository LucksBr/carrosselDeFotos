const container_image = document.getElementById('container-image');
const img1 = document.getElementById('img-1'); 
const img2 = document.getElementById('img-2'); 
const img3 = document.getElementById('img-3'); 
const img4 = document.getElementById('img-4'); 

let bancoDeImagens = ['background_1.jpg','background_2.jpg','background_3.jpg', 'background_4.jpg', 'background_5.jpg']
let idOfContainer = 0;
    
    function alterarId (event) {
        const idbutton = event.path[0].id;

        if( idbutton == 'button_left' ) {
            --idOfContainer;
            conferirIndex()
            console.log(idOfContainer);
        }

        if ( idbutton == 'button_right' ) {
            ++idOfContainer;
            conferirIndex()
            console.log(idOfContainer);
        }

        alterarImage()
    }
    
    function conferirIndex () {

        if ( idOfContainer == -1) {

            idOfContainer = bancoDeImagens.length - 1;

        } else if ( idOfContainer == bancoDeImagens.length) {
            idOfContainer = 0;
        }

    }

    function alterarImage () {
        container_image.style.backgroundImage = `url(../img/${bancoDeImagens[idOfContainer]})`
    }

buttonLeft.addEventListener('click', alterarId)
buttonRight.addEventListener('click', alterarId)

window.onload = resetCollectImage() 

function resetCollectImage () {
    img1.style.background = `cover url(../img/${bancoDeImagens[0]} `
    
    img2.style.background = `cover url(../img/${bancoDeImagens[1]}`
    img3.style.background = `cover url(../img/${bancoDeImagens[2]}`
    img4.style.background = `cover url(../img/${bancoDeImagens[3]}`
}
