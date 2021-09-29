myStorage = window.localStorage;

function addEl(){
    let input = document.getElementById("todo");
    let newToDo = `
    <div>
        <input  type="checkbox"
                class="todo-checkbox"
                (click)="completeItem()"\>
        ${input}
    </div>`;
    document.getElementsByClassName("rectangle").appendChild(newToDo);

}