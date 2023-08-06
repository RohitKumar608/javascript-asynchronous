const time = Date.now()

function delayForSecond(ms) {
  while (Date.now() < time + ms) {}
}

const futureData = fetch('https://jsonplaceholder.typicode.com/posts')
futureData.then((res) => {
  console.log('I am resolved by promise')
})

setTimeout(() => {
  console.log('I am from setTimeout')
}, 0)

delayForSecond(1000)

console.log('Console me first')
