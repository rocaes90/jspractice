

class Person {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    console.log('hi ' + this.name)
  }
}

class Teacher extends Person {
  constructor(name, grade) {
    super(name)
    this.grade = grade
  }
}

class Student extends Person {
  constructor(name, group) {
    super(name)
    this.group = group
  }
  sayMyGroup() {
    console.log('My group is ' + this.group)
  }
}

const tom = new Teacher('tom', '1')
const tim = new Student('tom', 'first')

tom.sayHi()
tom.grade
tim.sayMyGroup()