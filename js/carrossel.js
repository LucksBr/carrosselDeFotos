const container_image = document.getElementById('container-image');

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





