
let todos = [];

setToDoList();

function setToDoList() {
    let retrievedToDos = JSON.parse(localStorage.getItem("todos"));
    retrievedToDos.forEach(input => generateToDo(input));
}

function addToDo() {
    var input = document.getElementById("todo").value;
    generateToDo(input);
}

function generateToDo(input){
    var newToDo = document.createElement("li");

    addCheckbox(newToDo);
    addInput(newToDo, input);
    addDeleteButton(newToDo);

    newToDo.className = "aToDo";
    newToDo.contentEditable="true";
    
    document.getElementById("todolist").appendChild(newToDo);

    document.getElementById("todo").value = "";
}

function addCheckbox(listElement) {
    var chbox = document.createElement("input");
    chbox.type = "checkbox";
    listElement.appendChild(chbox);
}

function addInput(listElement, input) {
    storeInput(input);

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

function storeInput(input) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(input);
    localStorage.setItem("todos", JSON.stringify(todos));
}



