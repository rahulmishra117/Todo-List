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

// show todo with lopping create element
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

// execute edit todo
function editedTodo(i, newTodo) {
    todo.splice(i, 1, newTodo);
    showTodo(); 
}

// delete todo
function deleteTodo(i) {
    if (confirm("Are you sure to delete?")) {
        todo.splice(i, 1);
    }
    showTodo();
}

// complete todo


var textWrapper = document.querySelector(' .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });