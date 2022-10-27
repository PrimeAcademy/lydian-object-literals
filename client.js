let bookList = [
  { // object literal
    // index 0
    title: 'The Race',
    genre: 'Action'
  },
  { // object literal
    // index 1
    title: 'The Journey',
    genre: 'Adventure'
  },
  {
    title: 'The Elf',
    genre: 'Fantasy'
  },
  {
    title: 'The Rocket',
    genre: 'Sci Fi'
  },
  {
    title: 'The Computer',
    genre: 'Sci Fi'
  },
  {
    title: 'The Unicorn',
    genre: 'Fantasy'
  },
  {
    title: 'The Person',
    genre: 'Biography'
  },
  {
    title: 'The Book About Plants',
    genre: 'Action'
  },
  {
    title: 'The Space Ship',
    genre: 'SciFi'
  },
  {
    title: 'The Book About Animals',
    genre: 'Non-Fiction'
  },
  {
    title: 'The Public Speaker',
    genre: 'Biography'
  },
  {
    title: 'The Burrito',
    genre: 'Non-Fiction'
  },
  {
    title: 'The Climb',
    genre: 'Adventure'
  }
];


// be able to find all the books in the bookList of a particular genre and put them in a different list

// loop thru the books


function findBook(findGenre) {
  // let findGenre = 'Biography';
  // invent another shelf
  let matchingBooks = [];

  // go thru each book on the shelf
  for (let i = 0; i < bookList.length; i++) {
    let book = bookList[i]; // i = 0, i = 1, i = 2
    // bookList[1]
    // bookList[2]
    // bookList[3]

    // compare findGenre to book's genre
    if (findGenre == book.genre) {
      console.log(book.title);
      // put it on the other shelf
      matchingBooks.push(book.title);
    }
  } // end of for loop

  console.log('matchingBooks has ', matchingBooks);

  return matchingBooks;


} // end of findBook



// Your function should return an arry of the book titles in the selected genre
console.log('Adventure Books', findBook('Adventure'));
console.log('Biography Books', findBook('Biography'));
console.log('Biography Books', findBook('SciFi'));