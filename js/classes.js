class School {
	constructor() {
		this.school = 'Hello'
	}
}

class Student extends School { 
	constructor(name, grades, computerType) {
		super()
		this.name = name
		this.grades = Utils.formatGrades(grades)
		this.gradeAvg = Utils.gradeGenerator(grades)
		this.computerType = computerType
	}

	createStudent() {
		let tempHTML = '<li class="student-item">'
		tempHTML += `<h2 class="student-name">${this.name}</h2>`
		tempHTML += `<p>School: <span class="student-school">${this.school}</span></p>`
		tempHTML += `<p>Grades: <span class="student-grades">${this.grades}</span></p>`
		tempHTML += `<p>Average: <span class="student-grades">${this.gradeAvg}</span></p>`
		tempHTML += `<p>Computer Type: <span class="student-computer-type">${this.computerType}</span></p>`
		tempHTML += '</li>'

		return tempHTML
	}
}