let students
(() => {
	students = []
	document.querySelector('.btn-add').addEventListener('click', addStudent)
	document.querySelector('.btn-update').addEventListener('click', updateStudents)
})()

function addStudent(e) {
	e.preventDefault()
	let insertionPoint = document.querySelector('.students')
	let inputValues = document.querySelectorAll('input[data-student="student"]')
	let newStudent = new Student(inputValues[0].value, inputValues[1].value, inputValues[2].value)
	newStudent.school = document.querySelector('.txt-school').value
	insertionPoint.insertAdjacentHTML('beforeend', newStudent.createStudent())
	document.querySelector('.main-form').reset()
	students.unshift(newStudent)
}

function updateStudents(e) {
	e.preventDefault()
	let insertionPoint = document.querySelector('.students')
	insertionPoint.innerHTML = ''
	for (var i = 0; i < students.length; i++) {
		students[i].school = document.querySelector('.txt-school').value
		insertionPoint.insertAdjacentHTML('beforeend', students[i].createStudent())
	}
}