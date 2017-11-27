class Zoo {
	constructor(animals) {
		this.animals = animals
	}

	displayInfo() {
		let insertionPoint = document.querySelector('.zoo-tbody')
		for (var i = 0; i < this.animals.length; i++) {
			let tempHTML = `<tr id="animal-id-${this.animals[i].id}">`
			this.animals[i]
			tempHTML += `<td>${this.animals[i].name}</td>`
			tempHTML += `<td>${this.animals[i].id}</td>`
			tempHTML += `<td>${this.animals[i].species}</td>`
			tempHTML += `<td>${this.animals[i].weight}</td>`
			tempHTML += `<td>${Zoo.zoo}</td>`
			tempHTML += '</tr>'
			insertionPoint.insertAdjacentHTML('beforeend', tempHTML)
			document.querySelector(`#animal-id-${this.animals[i].id}`).addEventListener('click', this.animals[i].feed)
		}
	}
}

class Animal {
	constructor() {
		this.name = ''
		this.id = Utils.randomInt(0, 10000)
		this.species = ''
		this.weight = 0
	}

	feed() {
		alert(this.species + ' has no diet')
	}
}

class Lion extends Animal {
	constructor(n, w) {
		super()
		this.name = n
		this.species = "Lion"
		this.weight = w		
	}

	feed() {
		alert('Lion\'s eat large amounts of meat')
	}
}

class Owl extends Animal {
	constructor(n, w) {
		super()
		this.name = n
		this.species = "Owl"
		this.weight = w
	}

	feed() {
		alert('Owls\'s eat a small amount of meat')
	}
}

class Dolphine extends Animal { 
	constructor(n, w) {
		super()
		this.name = n
		this.species = "Dolphine"
		this.weight = w
	}

	feed() {
		alert('Dolphine\'s eat a large amount of fish & squid')
	}
}