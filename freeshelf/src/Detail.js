import React from 'react'
import './App.css';
import 'bulma/css/bulma.min.css';


export default function Detail({ book }) {
    return (
        <div className='has-text-weight-medium'>
            { book.url ? (
                <div className='my-1'>URL: <a href="book.url" className='has-text-weight-light'>{book.url}</a></div>
            ): (
                ''
            )}

            { book.publisher ? (
                <div className='my-1'>Published by: <span className='has-text-weight-light'> {book.publisher}</span></div>
                ) : (
                    ''
                    )}

            { book.publicationDate ? (
                <div className='my-1'>Published on: <span className='has-text-weight-light'>{book.publicationDate}</span></div>
            ) : (
                ''
            )} 
            
            { book.detailedDescription ? (
                <div className='my-1'>Full description: <span className='has-text-weight-light'> {book.detailedDescription}</span></div>
            ) : (
                ''
            )}       
        </div>
        )
    }