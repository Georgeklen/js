'use strict'
//
const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');
const headerButton = document.querySelector(".header-button")
const todoItem = document.querySelector(".todo-item")



// headerButton.disabled=true
const todoData = [];

const render = function () {
    
	todoList.textContent = '';
	todoCompleted.textContent = '';


	todoData.forEach(function (item) {
		console.log(item)
		//обнулил инпут
        headerInput.value = '';
        // localStorage
        let todos;
        function toLocal() {
         todos = todoData.innerHTML
         localStorage.setItem("todoData", todoData)
        
        } 

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
                todoList.append(li);
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
        
        toLocal()
        // выполнение элемента
		const btnTodoCompleted = li.querySelector('.todo-complete');
		btnTodoCompleted.addEventListener('click', function () {
			item.completed = !item.completed;
            render()
            toLocal()
        })
        
// удаление элемента
		const btnTodoRemove = li.querySelector('.todo-remove');
		btnTodoRemove.addEventListener('click', function () {
			let i = todoData.indexOf(item);
			if (i >= 0) {
				todoData.splice(i, 1);
			}
            render();
            toLocal()
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
    render();
    
})
if (localStorage.getItem("todos")) {
    todoData.innerHTML = localStorage.getItem('todos')
}

render()
