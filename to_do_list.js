//BOTONES

let buttonAdd = document.getElementById('btnAdd');
let buttonClear = document.getElementById('btnClear');
let inputBar = document.getElementById('textBar');
let tasksTd = document.getElementById('tasks');
// let taskClearButton = document.getElementById('btn${tasksArray.length}');
let tasksArray = [];
//FUNCIONES

// function saludar() {
//     console.log('hola');
// }

// function clear() {
//     inputBar.value = "";
// }

// function escribirBorrar() {
//     if (inputBar.value.length == 0) {
//         // buttonClear.setAttribute("style", "animation: shake 0.5s"); //cs in js
//         // inputBar.value = "konga";
//         // buttonClear.textContent = "borrar";
//     } else {
//         inputBar.value = "";
//         // buttonClear.setAttribute("style", "animation: none;");
//         // buttonClear.textContent = "escribir";
//     }
// }
function loadInfo() {
    let i;
    for (let i = 1; i < 100 ;i++) {
        if (localStorage.getItem(i) != null) {
            tasksArray.push(i);
            // console.log(localStorage.getItem(i));
            let newDiv = document.createElement('div');
            newDiv.setAttribute('id', `task${i}`);
            newDiv.innerHTML = `<input type="checkbox" name="task"><label for="task">${localStorage.getItem(i)}</label><button id="btn${i}" type="button" onclick="taskClearing2(this)"><i class="fa-solid fa-trash-can"></i></i></button><br>`;
            tasksTd.appendChild(newDiv);
        } else {
            // return;
        }
    }
}

loadInfo();

function addTask() {
    let labelText = inputBar.value;
    if (labelText.length == 0) {
        let emptyMessage = document.getElementById('emptyMessage');
        emptyMessage.setAttribute("style", "display: block;");
        setTimeout(function() {
            emptyMessage.setAttribute("style", "display: none;"); 
        }, 2000);
        return;
    } else {
        tasksArray.push(tasksArray.length + 1);
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', `task${tasksArray.length}`);
        newDiv.innerHTML = `<input type="checkbox" name="task"><label for="task">${labelText}</label><button id="btn${tasksArray.length}" type="button" onclick="taskClearing2(this)"><i class="fa-solid fa-trash-can"></i></i></button><br>`;
        tasksTd.appendChild(newDiv);
        console.log(tasksArray);
    }
    inputBar.value = "";
    localStorage.setItem(tasksArray.length, labelText);
}

function taskClearing(button) { //element in parenthesis
    // let tasktoRemove = document.getElementById(butt.id);
    // tasksTd.removeChild(newDiv);
    // console.log(element.id);
    button.parentElement.remove();
    // console.log(butt);
}

function taskClearing2(button) {
    // let buttonId = document.getElementById('task' + button.id.id);
    let currentId = button.id.match(/\d+/)[0]; //daje tylko numer
    let divId = document.getElementById(`task${currentId}`);
    divId.remove();
    localStorage.removeItem(currentId);
    tasksArray.splice(currentId - 1, 1, null); //[0,1,2,3] --> (0,1) --> [1,2,3]  pozycja elemenut ktory chcemy usunac, liczac od 0 usuwamy dana pozycje, ile, co wstawia
    tasksArray.filter(Number);
    console.log(tasksArray);
    let checkArray = tasksArray.every(element => element === null);
    if (checkArray == false) {
        return;
    } else {
        tasksArray = [];
    }
    console.log(tasksArray);
    // console.log(positionArray);
    //borrar id del array, cuando se borra tarea, que se borre el id del array
}

//enter zamiast button

inputBar.addEventListener("keypress", function(pressEnter) {
    // If the user presses the "Enter" key on the keyboard
    if (pressEnter.key === "Enter") {
      // Cancel the default action, if needed
      pressEnter.preventDefault();
      // Trigger the button element with a click
      document.getElementById('btnAdd').click();
    }
  });
  

//ANIMACIONES

// buttonAdd.addEventListener("click", saludar);
// buttonClear.addEventListener("click", clear);
// buttonClear.addEventListener("click", escribirBorrar);
buttonAdd.addEventListener("click", addTask);
// butt.addEventListener("click", taskClearing);

//EXPLICACION
//acceder al boton de andair,  borrar, input-field y task-field creando las variables/constantes
//crear la funcion para que input-field se vacie

//crear la funcion de anadir tarea: 
//1. crear variable, si la etiqueta -label es igual al valor del input
//2. si el texto introducido es vacio --> crear variable emptyMessage y que salga el mensaje en rojo y se termine la funcion con return
//3. en otro caso --> crear array y meter dentro valor de su length
//crear variable de cada nuevo div - tarea --> 
//a cada nuevo div, ponerle nuevo id, con tasksArray.length
//acceder al html para crear el div/su forma
//generar para que se cree nuevo div, como hijos del tasksTd
//a cada boton ponerle id de length del array
//input para que se quede vacio
//llamar a la funcion

//crear funcion para borrar cada tarea
//acceder al numero de la tarea con parametro.id usando el onclick="taskClearing(this) en el boton 
//borrar el padre del button = div con la tarea usando tasktoRemove.parentElement.remove()
//llamar a la funcion


