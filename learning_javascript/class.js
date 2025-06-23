//class
class calculator {
    x = 10
    y = 20
    add(num1, num2) {
        console.log(num1 + num2)
    }
    sub(num1, num2) {
        console.log(num1 - num2)
    }
    mul(num1, num2) {
        console.log(num1 * num2)
    }

}

const cal1=new calculator()
cal1.add(2,7)
cal1.mul(3,3)
cal1.sub(100,99)
console.log(cal1.x)

// constructor:

class employee {
    printMessage() {
        console.log("Hello, I am an employee")
    }
    constructor(username, password) {
        console.log(username, password)
    }
    createemployee() {
        console.log("Employee created")
    }
}
// const emp1=new employee()
// emp1.printMessage()
const emp1 = new employee("shiva", "t")
const emp2 = new employee("babu", "r")
const emp3 = new employee("raju", "sir")
// emp3.createemployee()


//this keyword

class employeee {
    printMessagee() {
        console.log("Hello, I am an employee")
    }
    login(username, password) {
        this.printMessagee()
        console.log(username, password)
    }
    createemploye() {
        this.login()
        console.log("Employee created")
    }
}
const emp11 = new employeee()
emp11.createemploye()

//static variable

class student {
    static x = 20    //static variable
    y = 30           //non-static variable
    static m1() {                                //static method
        console.log("this is m1 method")
    }
    static m2() {
        console.log("this is m2 method")
    }
    m3() {                                      //non-static method
        console.log("this is m3 method")
    }

}

student.m1()
student.m2()
// student.m3()
console.log(student.x)

let stu = new student()
stu.m3()
console.log(stu.y)


