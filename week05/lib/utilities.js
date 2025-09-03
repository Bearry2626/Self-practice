function echo(msg) {
  return msg
}


function getLength(str) {
  return str.length
}

const GPAAverageb = 3.0

class Book {
  constructor(isbn) {
    this.isbn = isbn
  }
}

export { echo,getLength as default , GPAAverageb, Book }


// module.exports = {echo, getLength, GPA: GPAAverageb, book}