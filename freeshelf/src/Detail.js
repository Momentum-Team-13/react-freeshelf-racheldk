import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Book from './Book.js'
import 'bulma/css/bulma.min.css';
import { useState } from 'react'
import App from './App';

function Detail({ book }) {
    return (
        <div>
            <div className='my-1 has-text-weight-semibold'>URL: <a href="book.url" className='has-text-weight-light'>{book.url}</a></div>
            <div className='my-1'>Published by: <span className='has-text-weight-light'> {book.publisher}</span></div>
            <div className='my-1'>Published on: <span className='has-text-weight-light'>{book.publicationDate}</span></div>
            <div className='my-1'>Detailed description: <span className='has-text-weight-light'> {book.detailedDescription}</span></div>
        </div>
        )
    }

export default App    