async function createFlow() {
  console.log('createFlow first')
  const futureData = await fetch('https://jsonplaceholder.typicode.com/posts')
  console.log(futureData)
  return futureData
}

createFlow()

console.log('Me second')
