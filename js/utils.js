class Utils {
	constructor() {

	}

	static gradeGenerator(grades) {
		let numberGrades = grades.split(',')
		let gradeAvg = 0
		numberGrades.map(grade => {
			gradeAvg += parseFloat(grade)
		})
		
		return (gradeAvg / numberGrades.length).toFixed(2)
	}

	static formatGrades(grades) {
		let numberGrades = grades.split(',')
		for (var i = 0; i < numberGrades.length; i++) {
			numberGrades[i] = ' ' + numberGrades[i].replace(/\s/g,'')
		}
		return numberGrades
	}

	static randomInt(min,max)
	{
		return Math.floor(Math.random()*(max-min+1)+min);
	}

}