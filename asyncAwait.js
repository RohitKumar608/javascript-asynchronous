function createFlow() {
  console.log('createFlow first')
  return fetch('https://jsonplaceholder.typicode.com/posts')
  // console.log(futureData)
  // return futureData
}

function createFlow1() {
  console.log('createFlow-1 first')
  return fetch('https://jsonplaceholder.typicode.com/posts')
  // console.log(futureData)
  // return futureData
}

createFlow().then((res) => console.log(res, '1'))
createFlow1().then((res) => console.log(res, '2'))

// function delayForSecond() {
//   const time = Date.now()
//   while (Date.now() < time + 2000) {}
// }

console.log('Me second')
