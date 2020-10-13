// add new function to the Date prototype
Date.prototype.lastYear = function() {
  return this.getFullYear() - 1 
} 

const dateValue = new Date('1990-10-10').lastYear()

console.log('dateValue', dateValue)

// modify .map prototype function
Array.prototype.map = function() {
  let array = []
  for(let i = 0; i < this.length; i++) {
    array.push((this[i] + '_'))
  }
  return array
}


console.log([1,2,3].map())
