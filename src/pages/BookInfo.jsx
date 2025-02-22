import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {  } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../UI/Rating";
import Price from "../UI/Price";
import Book from "../UI/Book";

function BookInfo({ books, addToCart, cart }) {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsOnCart() {
    return cart.find(book => +book.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} className="book__selected--img" alt={book.title} />
              </figure>
              <div className="book__seleced--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__secected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    In, pariatur. Dolorum nam porro est maiores reprehenderit
                    distinctio expedita facilis ratione vitae veritatis qui,
                    cumque perspiciatis eaque amet, fuga architecto rem.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    In, pariatur. Dolorum nam porro est maiores reprehenderit
                    distinctio expedita facilis ratione vitae veritatis qui,
                    cumque perspiciatis eaque amet, fuga architecto rem.
                  </p>
                </div>

                {bookExistsOnCart() ? (
                  <Link to="/cart">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to Cart
                  </button>
                )}
                {/* addToCart(book) */}
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--tilte--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
