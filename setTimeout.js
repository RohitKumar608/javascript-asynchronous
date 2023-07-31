function colorLog(message, color) {
  color = color || 'black'

  switch (color) {
    case 'success':
      color = 'Green'
      break
    case 'info':
      color = 'DodgerBlue'
      break
    case 'warning':
      color = 'Orange'
      break
    default:
      color = color
  }

  console.log('%c' + message, 'color:' + color)
}

function delayFor2Second() {
  while (Date.now() < time + 2000) {}
}

const time = Date.now()

colorLog('Log me first', 'success')

setTimeout(() => {
  colorLog('Log me third', 'warning')
}, 1000)

delayFor2Second()

colorLog('Log me second', 'info')
