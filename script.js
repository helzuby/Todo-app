const addbutton = document.getElementById('add');
const deletebutton = document.getElementById('delete');
const input = document.getElementById('input-box');
const ol = document.getElementById('list-container');


let todoItems = []

addbutton.addEventListener('click', addTodo);
deletebutton.addEventListener('click', deleteTodo);


//Function to add task to local storage
function addTodo () {
	const textInput = input.value.trim();
	if (textInput === '') return;

	const todo = {
		text: textInput,
		id: Date.now()
	};

	todoItems.push(todo);
	saveTodoToLocalStorage(todoItems);
	addTodoToList(todo); 
	input.value = '';
}

//Function get task from local storage 
function getTodoFromLocalStorage() {
            const todo = JSON.parse(localStorage.getItem('todo'));
            return todo || [];
        }
 // function to add todo to HTML using JS
 function addTodoToList(todo) {
 	const li = document.createElement('li');
 	li.textContent = todo.text;
 	ol.appendChild(li);
 }

function saveTodoToLocalStorage(todo) {
    localStorage.setItem('todo', JSON.stringify(todo));
}
 
 	
 	function deleteTodo() {
 	
 		if(todoItems.length > 0) {
 			todoItems.pop();
 			saveTodoToLocalStorage(todoItems);
                renderTodo();
 		}
 	}

function renderTodo() {
    ol.innerHTML = '';
    todoItems.forEach(addTodoToList);
}

renderTodo();
