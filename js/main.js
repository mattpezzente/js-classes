let zoo
let zooAnimals

(() => {
	zooAnimals = []
	zoo = new Zoo(zooAnimals)
	Zoo.zoo = document.querySelector('.txt-zoo').value
	document.querySelector('.btn-add').addEventListener('click', addAnimal)
	document.querySelector('.btn-update').addEventListener('click', displayZoo)
})()

function addAnimal(e) {
	e.preventDefault()
	let tempAnimal
	let formValues = document.querySelectorAll('*[data-zoo="animal"]')
	switch(formValues[0].value) {
		case "Lion":
			tempAnimal = new Lion(formValues[1].value, formValues[2].value)
			break;
		case "Owl":
			tempAnimal = new Owl(formValues[1].value, formValues[2].value)
			break;
		case "Dolphine":
			tempAnimal = new Dolphine(formValues[1].value, formValues[2].value)
			break;
	}
	document.querySelector('.main-form').reset()
	zooAnimals.push(tempAnimal)
	alert(tempAnimal.name + ' Has been added to ' + Zoo.zoo)
}

function displayZoo(e) {
	e.preventDefault()
	document.querySelector('.zoo-tbody').innerHTML = ''
	Zoo.zoo = document.querySelector('.txt-zoo').value
	zoo.displayInfo()
}