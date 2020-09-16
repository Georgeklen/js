'use strict'
// 
const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');
// const todoRemove = li.querySelector(".todo-remove");
const headerButton = document.querySelector(".header-button")
const todoItem = document.querySelector(".todo-item")
//


const todoData = [];

const render = function() {
todoList.textContent = '';
todoCompleted.textContent = '';


todoData.forEach(function(item){
 console.log(item)
 //обнулил инпут
 headerInput.value='';

 const li = document.createElement('li');
 li.classList.add('todo-item') 
 li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
 '<div class = "todo-buttons">' + 
    '<button class="todo-remove"></button>' +
    '<button class="todo-complete"></button>'+
 '</div>'
  if (item.completed) {
      todoCompleted.append(li)
  } else {
    todoList.append(li)
  }
 

  const btnTodoCompleted = li.querySelector('.todo-complete');
  btnTodoCompleted.addEventListener('click', function() {
      item.completed = !item.completed;
      render()
  })
  });
  
  
}

  todoControl.addEventListener('submit', function(event) {
    event.preventDefault();

    const newTodo = {
        value: headerInput.value,
        completed: false
    }
    todoData.push(newTodo)
    render();
})
render()

const todoRemove = document.querySelector(".todo-remove");
// todoRemove.addEventListener('click', function() {
//     todoItem.removeChild(li)
//     console.log(li)
// })
// todoRemove.addEventListener('click', (e) => {
//     todoList.remove(li)
// })
  
        