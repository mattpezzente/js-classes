class Animal {
	constructor() {
		this.name
		this.id = Utils.randomInt(0, 10000)
		this.species
		this.weight
	}

	displayInfo() {
		let insertionPoint = document.querySelector('.zoo-tbody')
		let tempHTML = `<tr id="animal-id-${this.id}">`
		tempHTML += `<td>${this.name}</td>`
		tempHTML += `<td>${this.id}</td>`
		tempHTML += `<td>${this.species}</td>`
		tempHTML += `<td>${this.weight}</td>`
		tempHTML += `<td>${Animal.zoo}</td>`
		tempHTML += '</tr>'
		insertionPoint.insertAdjacentHTML('beforeend', tempHTML)
		document.querySelector(`#animal-id-${this.id}`).addEventListener('click', this.feed)
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