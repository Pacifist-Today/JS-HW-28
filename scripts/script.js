"use strict"

let calculator = {
    read() {
        this.a = +prompt("Enter first value")
        if (isNaN(this.a)) {
            console.log("You didn't enter number")
        }   else {
            this.b = +prompt("Enter second value")
            if (isNaN(this.b)) {
                console.log("You didn't enter number")
            }
        }
    },
    sum() {
        let result = this.a + this.b
        return result
    },
    mul() {
        let result = this.a * this.b
        return result
    }
}

calculator.read();
console.log(calculator.sum())
console.log(calculator.mul());