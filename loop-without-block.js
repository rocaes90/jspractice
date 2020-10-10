// math functions to evaluate
function forSum(numbers) {
  const numbersLength = numbers.length

  const min = numbers.slice(0,1)[0]
  const max = numbers.slice(numbersLength -1, numbersLength)[0]

  let total = 0;
  for (var i = min; i <= max; i++) {
    total += i;
  }
  return total;
}

const syncSum = (numbers) => numbers.reduce((initialValue, currentValue) => initialValue + currentValue)

const asyncSum = async(numbers) => numbers.reduce((initialValue, currentValue) => initialValue + currentValue)

// executer
const createArrayToEvaluate = ({start, end}) => {
  const numbers = Array(end - start + 1).fill().map((_, index) => start + index)

  return (mathFunctionToApply) =>  mathFunctionToApply(numbers)
}

// test scenario
const props = {
  start: 1,
  end: 10000000
}

const evaluateArray = createArrayToEvaluate(props)

console.log('checkPoint #1 !!!')

console.log('forSum #1', evaluateArray(forSum))

console.log('syncSum #1', evaluateArray(syncSum))

setTimeout( 
  () => console.log('syncSum #2', evaluateArray(syncSum)), 
  0  
)

evaluateArray(asyncSum).then((value) => console.log('asyncSum #1', value))

console.log('checkPoint #2 !!!')
