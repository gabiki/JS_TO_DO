//BOTONES

let buttonAdd = document.getElementById('btnAdd'); //odwolanie do buttona
let buttonClear = document.getElementById('btnClear');
let inputBar = document.getElementById('textBar');




//FUNCIONES

// function saludar() {  
//     console.log('hola');
// }

function clear() { // funkcja aby pole bylo puste
    inputBar.value = "";
}

function escribirBorrar() { // funkcja jesli pole puste -> shake, jesli cokolwiek innego usuwa
    if (inputBar.value.length == 0) {
        // buttonClear.setAttribute("style", "animation: shake; animation-duration: 0.5s;"); //cs in js
        // buttonClear.toggleAttribute("btnClear");
        
        buttonClear.setAttribute("style", "animation-play-state: running;");

        setTimeout (function()  {
            buttonClear.setAttribute("style");
        }, 3000);

        buttonClear.removeAttribute("style");
        // inputBar.value = "konga";
        // buttonClear.textContent = "borrar";

    } else {
        inputBar.value = "";
        buttonClear.setAttribute("style", "animation: none;");
        // buttonClear.textContent = "escribir";
    }
}

// function removeShake() {
//     buttonClear.removeAttribute("style", "animation-play-state: running;");
// }

// //ANIMACIONES

// // buttonAdd.addEventListener("click", saludar);
// // buttonClear.addEventListener("click", clear);
// buttonClear.addEventListener("click", escribirBorrar);
// // buttonClear.addEventListener("animationend", removeShake);

buttonClear.onclick = escribirBorrar;