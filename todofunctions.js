var myStorage = window.localStorage;
let todos = [];

function addToDo(){
    var newToDo = document.createElement("li");

    addCheckbox(newToDo);
    addInput(newToDo);
    addDeleteButton(newToDo);

    newToDo.className = "aToDo";
    newToDo.contentEditable="true";
    
    document.getElementById("todolist").appendChild(newToDo);

    document.getElementById("newToDo").value = "";
}

function addCheckbox(listElement) {
    var chbox = document.createElement("input");
    chbox.type = "checkbox";
    listElement.appendChild(chbox);
}

function addInput(listElement) {
    var input = document.getElementById("todo").value;
    var txt = document.createTextNode(" "+input); 
    listElement.appendChild(txt);
}

function addDeleteButton(listElement) {
    var del = document.createElement("SPAN")
    var x = document.createTextNode("\u00D7");
    del.className = "delete"
    del.onclick = function() {
        var del = this.parentElement;
        del.style.display = "none";
    }
    del.appendChild(x);
    listElement.appendChild(del)
}


