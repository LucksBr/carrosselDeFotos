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

        alterarCollection()
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

    function alterarCollection() {
        
        img1.style.background = ` url(../img/${bancoDeImagens[idOfContainer + 1]} `
        img2.style.background = ` url(../img/${bancoDeImagens[idOfContainer + 2 ]}`
        img3.style.background = ` url(../img/${bancoDeImagens[idOfContainer + 3 ]}`
        img4.style.background = ` url(../img/${bancoDeImagens[idOfContainer + 4 ]}`
        img1.style.backgroundSize = 'cover'
        img2.style.backgroundSize = 'cover'
        img3.style.backgroundSize = 'cover'
        img4.style.backgroundSize = 'cover'
    
    }

buttonLeft.addEventListener('click', alterarId)
buttonRight.addEventListener('click', alterarId)



function resetCollectImage () {
    img1.style.backgroundImage = `url(../img/${bancoDeImagens[1]} `
    img2.style.background = ` url(../img/${bancoDeImagens[2]}`
    img3.style.background = ` url(../img/${bancoDeImagens[3]}`
    img4.style.background = ` url(../img/${bancoDeImagens[4]}`
    img1.style.backgroundSize = 'cover'
    img2.style.backgroundSize = 'cover'
    img3.style.backgroundSize = 'cover'
    img4.style.backgroundSize = 'cover'

}

window.onload = resetCollectImage() 