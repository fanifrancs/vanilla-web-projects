// retrieves todos from local store
document.addEventListener('DOMContentLoaded', getTodos);

const
addBtn = document.querySelector('button'),
todos = document.querySelector('.todos');

addBtn.addEventListener('click', addTodo);

function addTodo() {
    let id_a = localStorage.getItem('todo_id');
    if (id_a === null) {
        localStorage.setItem('todo_id', 0);
        id_a = parseInt(localStorage.getItem('todo_id'));
    } else {
        id_a++;
    }
    let todo_a = prompt(`Enter todo, press ok. When done, press cancel.`);

    if (!todo_a.trim().replace(/\s/g, '').length) {
        alert('Please enter a valid input');
        todo_a = null;
    } else {
        todo_a = todo_a.replace(/[<>]/g, '');
    }

    if (todo_a === null) {
        getTodos();
    } else {
        AddTodo(todo_a, id_a);
        localStorage.setItem('todo_id', id_a);
        saveTodos();
        while (todo_a !==  null) {
            let id_b = localStorage.getItem('todo_id');
            id_b++;
            let todo_b = prompt(`Enter todo, press ok. When done, press cancel.`);
            if (!todo_b.trim().replace(/\s/g, '').length) {
                alert('Please enter a valid input');
                todo_b = null;
            } else {
                todo_a = todo_a.replace(/[<>]/g, '');
            }
            if (todo_b === null) {
                todo_a = null;
                getTodos();
            } else {
                AddTodo(todo_b, id_b);
                localStorage.setItem('todo_id', id_b);
                saveTodos();
            }
        }
    }
}

function AddTodo(todo, id) {
    todos.innerHTML += 
    `<li id="todo${id}" onclick="completed(this.id)">
        ${todo}
        <i 
            id="${id}" 
            class="fa-solid fa-trash"
            onclick="deleteTodo(this.id)"
        >
    </li>`
}

function saveTodos() {
    localStorage.setItem('localTodos', todos.innerHTML);
}

function getTodos() {
    todos.innerHTML = localStorage.getItem('localTodos');
}

function deleteTodo(param) {
    const deleteBtn = document.getElementById(param);
    deleteBtn.parentElement.remove();
    saveTodos();
}

function completed(param) {
    document.getElementById(param).classList.toggle('completed');
    saveTodos();
}
