const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
const book = getBook(3);
// const title = book.title;
// const author = book.author;
const { title, author, genres, pages } = book;
console.log(`Title:${title} , Author:${author}`);

const [primaryGenre, secondryGenre, ...restGenres] = genres;
console.log(`${primaryGenre} , ${secondryGenre}`);
console.log(restGenres);

const newGenres = [...genres, "epic fantasy"];

const updatedBook = { ...book, moviePublicationDate: "2001-12-19", pages: 510 };
updatedBook;
const getYear = (str) => str.split("-")[0];
const summary = `${title} is a ${pages}-page book written by ${author} and has been published in ${getYear(book.publicationDate)}. It falls under the genres of ${genres[0]}.`;
summary;
console.log(summary);

function getTotalReviews(book) {
  const goodreadsReviews = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarythingReviews = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreadsReviews + librarythingReviews;
}

const totalReviews = getTotalReviews(book);
console.log(totalReviews);
*/

/*
function getTotalReviews(book) {
  const goodreadsReviews = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarythingReviews = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreadsReviews + librarythingReviews;
}
const books = getBooks();
const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  auth: book.author,
  reviewsCount: getTotalReviews(book),
}));
essentialData;

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books.filter((book) =>
  book.genres.includes("adventure"),
);
adventureBooks;

const pagesToRead = books.reduce((acc, book) => acc + book.pages, 0);
pagesToRead;

const arr = [3, 7, 1, 9, 6];
const sortedArr = arr.slice().sort((a, b) => a - b);
sortedArr;
arr;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  auth: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

const booksAfterDelete = books.filter((book) => book.id != 3);
booksAfterDelete;

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? {} : book,
);
booksAfterUpdate;
*/

// A good way for debuging the fetching errors
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.error(err);
//     console.error(err.cause);
//   });

// fetch("https://dummyjson.com/todos/2")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch(console.error);

async function getAdvice(id) {
  const data = await (await fetch(`https://dummyjson.com/todos/${id}`)).json();
  return data;
}
const todo = await getAdvice(1);

console.log(todo);
console.log("Abdo");
