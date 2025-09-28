let elementoscroll = document.querySelectorAll('.scroll');
let elementocontainer = document.querySelectorAll('.scroll__container');
let elementofilho = Array.from(elementocontainer.children);

// Verifica se o container existe antes de continuar
/*if (elementocontainer) {
    // Array.from(elementocontainer.children) é o correto se elementocontainer for um ÚNICO elemento DOM.
    let elementofilho = Array.from(elementocontainer.children); 

    elementofilho.forEach((item) => {
        let elementoduplo = item.cloneNode(true);
        elementocontainer.appendChild(elementoduplo);
    });*/
   /* elementofilho.forEach((item) => {
        let elementoduplo = item.cloneNode(true);
        elementocontainer.appendChild(elementoduplo);
    });*/

