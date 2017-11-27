class School {
	constructor() {
		this.school = 'Hello'
		this.students = []
		this.faculty = []
	}

	enrollStudent(student) {

	}

	hireTeacher(teacher) {

	}
}

class Person {
	constructor() {
		this.fname = ''
		this.lname = ''
		this.gender = ''
	}
}

class Teacher extends Person {
	constructor(first, last, teaching) {
		super()
		fname = first
		lname = last
		this.class = teaching
	}
}

class Student extends Person { 
	constructor(name, grades, computerType) {
		super()
		this.name = name
		this.id = Utils.randomInt(0, 10000)
		this.grades = Utils.formatGrades(grades)
		this.gradeAvg = Utils.gradeGenerator(grades)
		this.computerType = computerType
		this.studentHTML = createStudent()
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