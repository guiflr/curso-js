class App{

	constructor(){
		this.repository = [];

		this.formEl = document.getElementById('repo-form');
		this.listEl = document.getElementById('repo-list');

		this.registerHandler();
	}

	registerHandler(){
		this.formEl.onsubmit = event => this.addRepository(event);
	}

	addRepository(event){
		event.preventDefault();

		this.repository.push({
			name:'rocketseat.com.br',
			description:'Tire sua ideia do papel',
			avatar_url:'https://avatars1.githubusercontent.com/u/46029951?v=4',
			html_url:'https://github.com/guiflr',
		});
	
		this.render();
	}

	render(){
		this.listEl.innerHTML = '';

		this.repository.forEach(repo => {

			let imgEl = document.createElement('img');
			imgEl.setAttribute('src',repo.avatar_url);

			let titleEl = document.createElement('strong');
			titleEl.appendChild(document.createTextNode(repo.name));

			let descriptionEl = document.createElement('p');
			descriptionEl.appendChild(document.createTextNode(repo.description));

			let linkEl = document.createElement('a');
			linkEl.setAttribute('target','_blank');
			linkEl.appendChild(document.createTextNode('Acessar'));

			let listItemEl = document.createElement('li');
			listItemEl.appendChild(imgEl);
			listItemEl.appendChild(titleEl);
			listItemEl.appendChild(descriptionEl);
			listItemEl.appendChild(linkEl);

			this.listEl.appendChild(listItemEl);
		});
	}
}

new App();