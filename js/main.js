let zooAnimals
(() => {
	Animal.zoo = document.querySelector('.txt-zoo').value
	zooAnimals = []
	document.querySelector('.btn-add').addEventListener('click', addAnimal)
	document.querySelector('.btn-update').addEventListener('click', updateZoo)
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
	tempAnimal.displayInfo()
	document.querySelector('.main-form').reset()
	zooAnimals.push(tempAnimal)
}

function updateZoo(e) {
	e.preventDefault()
	document.querySelector('.zoo-tbody').innerHTML = ''
	Animal.zoo = document.querySelector('.txt-zoo').value
	for (var i = 0; i < zooAnimals.length; i++) {
		zooAnimals[i].displayInfo()
		console.log(zooAnimals[i].zoo)
	}
}