class User {
    constructor(firstName, lastName, userName, passWord, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.userName = userName
        this.passWord = passWord
        this.age = age
        this.isLoggedIn = false
        this.lastLoggedIn = 0
        this.isActive = true
    }
    signIn() {
        if (this.isActive) {
            this.isLoggedIn = true
            this.lastLoggedIn = Date.now()
        } else {
            alert('This Acc has Been Deleted')
        }
    }
    signOut() {
        this.isLoggedIn = false
    }
    getLastLoggedIn() {
        const date = new Date(this.isLoggedIn)
        return date.toLocaleTimeString()
    }
    deActivateAcc() {
        this.isActive = false
    }
    reActivateAcc() {
        this.isActive = true
        alert('Welcome Back' + this.userName)
    }
}

class Teacher extends User {
    constructor(firstName, lastName, userName, passWord, age, subject, salary) {
        super(firstName, lastName, userName, passWord, age)
        this.subject = subject
        this.salary = salary
        this.workHours = 0
    }

    giveMark() {

    }
}

class Student extends User {
    constructor(firstName, lastName, userName, passWord, age, grade, tuition) {
        super(firstName, lastName, userName, passWord, age)
        this.grade = grade
        this.tuition = tuition
    }
}



class School {
    constructor(name) {
        this.name = name
        this.grades = {}
        this.Teachers = []
        this.Students = []
    }

    registerStudent(firstName, lastName, userName, passWord, age, grade) {
        const student = new Student(firstName, lastName, userName, passWord, age, grade)
        this.students.push(student)
    }

    hireTeacher(firstName, lastName, userName, passWord, age, subject, salary) {
        const teacher = new Teacher(firstName, lastName, userName, passWord, age, subject, salary)
        this.Teachers.push(teacher)
    }
}



const user = new User('Ahmad', 'Kawasmi', 'iahmad2', '276609', 18)
const user2 = new Teacher('Ahmad', 'Kawasmi', 'Kwo', '2919', 19, 'ComputerSince', '4000')

console.log(user);