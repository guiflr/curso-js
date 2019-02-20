function getUser(){

	var inputElement = document.querySelector('#app input');
	var user = inputElement.value;

	axios.get('https://api.github.com/users/'+user+'/repos')
	.then(function(response){
		var listElement = document.querySelector('#app ul');
		var liElement = document.createElement('li');

		const {name} = response.data[0];

		var textUser = document.createTextNode(name);
		liElement.appendChild(textUser);
		listElement.appendChild(liElement);

		//saveToStorage(textUser);

	})
	.catch(function(error){
		console.warn(error);
	});
}

var buttonElement = document.querySelector('#app button');
buttonElement.onclick = getUser;

function saveToStorage(user){

	localStorage.setItem('list_user', JSON.stringify(user));
}