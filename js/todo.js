var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = (JSON.parse(localStorage.getItem('list_todos')) || []);

function toTodos(){

	listElement.innerHTML = '';

	for(todo of todos){

		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		var linkElement = document.createElement('a');
		linkElement.setAttribute('href','#');

		var pos = todos.indexOf(todo);
		linkElement.setAttribute('onclick','deleteTodo('+pos+')');

		var linkText = document.createTextNode('Excluir');
		linkElement.appendChild(linkText);

		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);

		listElement.appendChild(todoElement);
	}
}

toTodos();

function addTodos(){

	var toText = inputElement.value;

	if(toText != ''){
		todos.push(toText);
		inputElement.value = '';
		toTodos();
		saveToStorage();
	}else{

	}
	
}

buttonElement.onclick = addTodos;

function deleteTodo(pos){

	todos.splice(pos, 1);
	toTodos();
	saveToStorage();
}

function saveToStorage(){

	localStorage.setItem('list_todos', JSON.stringify(todos));
}