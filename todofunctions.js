myStorage = window.localStorage;

function addEl(){
    var input = document.getElementById("todo").value;
    var txt = document.createTextNode(input); 
    var newToDo = document.createElement("li");
    newToDo.appendChild(txt);
    document.getElementById("todolist").appendChild(newToDo);
}