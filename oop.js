// basic object
const elf = {
  name: 'Orwell',
  weapon: 'bow',
  attack() {
    return 'attack with ' + elf.weapon
  }
}

// console.log(elf.attack())

// factory functions
function createElf(name, weapon) {
  return {
    name,
    weapon, 
    attack() {
      return 'attack with: ' + weapon
    }
  }
}

// const petter = createElf('Petter', 'stornes')
// console.log(petter.attack())
// const sam = createElf('Sam', 'sword')
// console.log(sam.attack())

// prototypal inheritance = object.create

const elfFunctions = {
  attack() {
    return 'attack with ' + this.weapon
  }
}
function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions)
  newElf.name = name
  newElf.weapon = weapon 
  return newElf
}

// const petter = createElf('Petter', 'stornes')
// console.log(petter.attack())
// const sam = createElf('Sam', 'sword')
// console.log(sam.attack())

// -- prototypal inheritance = Contructor functions

function ElfCons(name, weapon) {
  this.name = name
  this.weapon = weapon 
}

ElfCons.prototype.attack = function() {
  return 'attack with ' + this.weapon 
}

const petter = new ElfCons('Petter', 'stones')
// console.log(petter.attack())
const sam = new ElfCons('Sam', 'sword')
// console.log(sam.attack())

// -- prototypal inheritance = Constructor Function

const Elf1 = new Function('name', 'weapon', `this.name = name
this.weapon = weapon`)

const sarah = new Elf1('sara', 'fireworks')
// console.log(sarah)

// -- prototypal inheritance = Contructor functions

function ElfCons(name, weapon) {
  this.name = name
  this.weapon = weapon 
}

ElfCons.prototype.attack = function() {
  return 'attack with ' + this.weapon 
}

const petter2 = new ElfCons('Petter2', 'stones')
// console.log(petter2.attack())
const sam2 = new ElfCons('Sam2', 'sword')
// console.log(sam2.attack())

// -- oop - class keyword

class ElfCls {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon 
  }
  attack() {
    return 'attack with ' + this.weapon 
  }
}

const petter3 = new ElfCls('Petter', 'stones')
console.log(petter3.attack())
const sam3 = new ElfCls('Sam', 'sword')
console.log(sam3.attack())
