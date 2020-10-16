const promise = new Promise((resolve, reject) => {
  if(true) {
    resolve('stuff worked')
  } else {
    reject('Error, it broke')
  }
})

//error handler
// promise
//   .then(result => {
//     throw Error
//     return result + '!'
//   })
//   .then(result2 => {
//     console.log(result2)
//   })
//   .catch(() => console.log('errrrooooorrr!'))

// promise
// .then(result => result + '!')
// .then(result2 => {
//   throw Error
//   console.log(result2 + '?')
// })
// .catch(() => console.log('errrrooooorrr!1'))
// .then(result3 => {
//   console.log(result3 + '!')}
//   )
// .catch(() => console.log('errrrooooorrr!2'))
  
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'HIII')
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'POOKIE')
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'Is it me you are looking for?')
})

console.time('start')
Promise.all([promise2, promise3, promise4])
  .then(values => {
    console.log(values)
    console.timeEnd('start')
  }) 