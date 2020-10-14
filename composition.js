//composition

const multiplyBy3 = (num) => num * 3
const takeAbsolute = (num) => Math.abs(num)

const compose = (f, g) => (data) => f(g(data))

const multiplyBy3AndAbsolute = compose(multiplyBy3, takeAbsolute)

console.log(multiplyBy3AndAbsolute(-10))