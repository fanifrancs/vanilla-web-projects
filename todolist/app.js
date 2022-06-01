document.addEventListener('DOMContentLoaded', getTodos);
let addBtn = document.querySelector('button');
let todos = document.querySelector('ul');

addBtn.addEventListener('click', addTodo);

//function below creates the todo and a unique id is assigned to each todo and it's
//delete button by making use of local storage to keep track of the id(number) and
//then incrementing the id every time a todo is added.

function addTodo() {
    let id = localStorage.getItem('t0d01d');
    if (id === null) {
        id = localStorage.setItem('t0d01d', 0);
        id = parseInt(localStorage.getItem('t0d01d'));
    } else {
        id++;
    }
    let todo = prompt(`Enter todo, press ok. When done, press cancel.`);
    todo = todo.replace(/[<>]/g, '');
    if (todo === null) {
        getTodos();
    } else {
        todos.innerHTML +=
        `<li id="todo${id}" onclick="completed(this.id)">
            ${todo}
        </li>
        <img class="bin" id="${id}" src="./trash2.svg" onclick="deleteTodo(this.id)">`;
        localStorage.setItem('t0d01d', id)
        saveTodos();
        while (todo !==  null) {
            let idd = localStorage.getItem('t0d01d');
            idd++;
            let toodo = prompt(`Enter todo, press ok. When done, press cancel.`);
            toodo = toodo.replace(/[<>]/g, '');
            if (toodo === null) {
                todo = null;
                getTodos();
            } else {
                todos.innerHTML +=
                `<li id="todo${idd}" onclick="completed(this.id)">
                    ${toodo}
                </li>
                <img class="bin" id="${idd}" src="./trash2.svg" onclick="deleteTodo(this.id)">`;
                localStorage.setItem('t0d01d', idd);
                saveTodos();
            }
        }
    }
}


function saveTodos() {
    localStorage.setItem('l0calt0d0s', todos.innerHTML);
}

function getTodos() {
    todos.innerHTML = localStorage.getItem('l0calt0d0s');
}

function deleteTodo(param) {
    let deleteBtn = document.getElementById(param);
    deleteBtn.previousElementSibling.remove()
    deleteBtn.remove();
    saveTodos();
}

function completed(param) {
    document.getElementById(param).classList.toggle('completed');
    saveTodos();
}