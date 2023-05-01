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
    let currentId = button.id.match(/\d+/)[0]; 
    let divId = document.getElementById(`task${currentId}`);
    divId.remove();
    localStorage.removeItem(currentId);
    tasksArray.splice(currentId - 1, 1, null); 
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
}

inputBar.addEventListener("keypress", function(pressEnter) {
    if (pressEnter.key === "Enter") {
      pressEnter.preventDefault();
      document.getElementById('btnAdd').click();
    }
  });
  
//ANIMACIONES

// buttonAdd.addEventListener("click", saludar);
// buttonClear.addEventListener("click", clear);
// buttonClear.addEventListener("click", escribirBorrar);
buttonAdd.addEventListener("click", addTask);
// butt.addEventListener("click", taskClearing);


