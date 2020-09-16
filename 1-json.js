const fs = require('fs')


// data stored as js object
// convert this into json
// const book = {
//     title: 'Human Acts',
//     author: 'Han Kang'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)


// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)


//What comes back IS NOT A STRING
// it's a buffer which allows node.js
// to represent binary data
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Julia'
user.age = 23

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
