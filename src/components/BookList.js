import React ,{useContext} from 'react'
import { BookContext } from '../Context/BookContext';
import BookDetails from './BookDetails'
const BookList = () => {
    const { books } =useContext(BookContext)
    return books.length ? ( 
      <div className="book-list">
          <ul>
              {books.map(book => {
                  return(
                      <BookDetails books={book}  key= {book.id} />
                  )
              })}
              
          </ul>
      </div>
     ) : (
         <div className="empty">
         Finished Reading Everything
         </div>
     )
}
 
export default BookList;