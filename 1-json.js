// data stored as js object
// convert this into json
const book = {
    title: 'Human Acts',
    author: 'Han Kang'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON.title)