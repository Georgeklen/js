'use strict'

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoCompleted = document.querySelector('.todo-completed');
const headerButton = document.querySelector(".header-button")
const todoItem = document.querySelector(".todo-item")
// const todoList  = document.querySelector(".todo")
const todo  = document.querySelector(".todo")

// headerButton.disabled=true
let todoData = [];

if (localStorage.getItem('todo')) {
    todoData = JSON.parse(localStorage.getItem('todo'));
    render();
}
function render () {

	todo.textContent = '';
	todoCompleted.textContent = '';

	todoData.forEach(function (item) {
        
		console.log(item)
		//обнулил инпут
        headerInput.value = '';
        // localStorage
        

		const li = document.createElement('li');
		li.classList.add('todo-item')
		li.innerHTML = `<span class="text-todo">${item.value}</span>
        <div class="todo-buttons">
            <button class="todo-remove"></button>
		    <button class="todo-complete"></button>
        </div>`;
        
        // проверка на пустоту
        
		if (item.value.trim() !== '') {
			if (item.completed) {
                // headerButton.disabled=false;
                todoCompleted.append(li);
                
			} else {
                todo.append(li);
                headerInput.value = '';
                // headerButton.disabled=true;
            }

        }

        // let disabledButton = function(){
        //     if (headerInput.value.trim()!==''){
        //         headerButton.disabled=false;
        //     }else{
        //         headerButton.disabled=true;
        //     }
        // }
        
        
        // выполнение элемента
        

		const btnTodoCompleted = li.querySelector('.todo-complete');
		btnTodoCompleted.addEventListener('click', function () {
            item.completed = !item.completed;
            localStorage.setItem('todo', JSON.stringify(todoData));
            render()
            
        })
        
        
// удаление элемента
        const btnTodoRemove = li.querySelector('.todo-remove');
		btnTodoRemove.addEventListener('click', function () {
			let i = todoData.indexOf(item);
			if (i >= 0) {
				todoData.splice(i, 1);
            }
            localStorage.setItem('todo', JSON.stringify(todoData));
            render();
            
		})
    });
    
}

todoControl.addEventListener('submit', function (event) {
	event.preventDefault();
	const newTodo = {
		value: headerInput.value,
		completed: false
    }
    todoData.push(newTodo)
    localStorage.setItem('todo', JSON.stringify(todoData));
    render();
    
})


