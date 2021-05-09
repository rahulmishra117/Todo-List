const BtnAdd = document.querySelector('#btn-add'),
      todoInput = document.querySelector('#input-todo'),
      todoList = document.querySelector('#todo-list');

let todo = [],
    mode = "add",
    todoId = "";


BtnAdd.addEventListener("click", addTodo);
todoList.addEventListener("click", isComplete);

if(todo.length){
    showTodo();
}

// function Show the todo data 
function showTodo() {
   todoList.innerHTML = "";
   for (let i = 0; i < todo.length; i++) {
       todoList.innerHTML += `<li class="item"><span>${todo[i]}</span> 
                                <a class="btn-edit" onclick="editTodo(${i})">Edit</a>
                                <a class="btn-delete" onclick="deleteTodo(${i})">Delete</a>
                             </li>`       
   }
}

// add todo and update todo with another function
function addTodo(e) {
    e.preventDefault();
    let val = todoInput.value;

    if (val === "") {
        alert("empty todo not allowed!");
    } else if (mode === "add") {
        todo.push(val);
    }else if (mode === "edit") {
        editedTodo(todoId, val);
    }

    mode = "add";
    BtnAdd.innerHTML = "add";
    todoId ="";
    todoInput.value = "";
    showTodo();
    // console.log(todoInput.value);
}

// find index todo berfore execute
function editTodo(i) {
    mode = "edit";
    BtnAdd.innerHTML = "edit";
    todoId = i;
    todoInput.value = todo[i];
    // console.log(todo[index]);
}

// function that editi the todo data form the list
function editedTodo(i, newTodo) {
    todo.splice(i, 1, newTodo);
    showTodo(); 
}

// Function that delete the item form todo and show an alert when data is deteled
function deleteTodo(i) {
    if (confirm("Are you sure to delete?")) {
        todo.splice(i, 1);
    }
    showTodo();
}

// Function that Clear the todo data
function cleardata(){
    var x=document.getElementById("todo-data").innerHTML;
    console.log(x);
    alert("Once data clear then Restart the windoow!!!");
    document.getElementById("todo-data").innerHTML = "";
}

