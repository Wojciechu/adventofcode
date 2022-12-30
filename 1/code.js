const fs = require('fs')
let input
fs.readFile('input.txt', (err, data) => {
  const result = calories(data.toString())
  console.log(result)
})

const calories = input => {
  const output = input.split('\n')

  output.forEach(elem => {
    
  });
  return output
}
