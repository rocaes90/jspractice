//currying
const multiply = (a,b) => a*b

const curriedMultiply = (a) => (b) => a*b
const curreidMultiplyBy5 = curriedMultiply(5)

curreidMultiplyBy5(2)
curreidMultiplyBy5(2)
curreidMultiplyBy5(2)
 
//partial application
const multiplyPartial = (a,b, c) => a*b*c

const partialCurriedMultiply = (a) => (b) => (c) => a*b*c //currying
partialCurriedMultiply(1)(2)(3) //currying

const partialMultiplyBy5 = multiplyPartial.bind(null, 5)
console.log(partialMultiplyBy5(4, 10))
