const closure = () => {
  let cont = 0
  return function increment() { // its not pure
    cont ++
    return cont
  }
}

const incrementFn = closure()
console.log(incrementFn())
console.log(incrementFn())
console.log(incrementFn())
console.log(incrementFn())
console.log(incrementFn())