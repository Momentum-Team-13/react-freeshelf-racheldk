import React from 'react'
import './App.css';
import Detail from './Detail.js'
import 'bulma/css/bulma.min.css';
import { useState } from 'react'


export default function Book({ book, index }) {
    const [expanded, setExpanded] = useState(false)
    return (
        <div className='box tile has-background-white book is-flex-direction-row-reverse is-justify-content-space-between'>
            <div className='mb-6'>
                <div className='image is-96x96'>
                    <img 
                        src={book.coverImageUrl}
                        onError={(e) => e.target.src = 'default_book_cover.jpeg'} 
                        alt='Cover'
                    ></img>
                </div>
            </div>
            <div className='has-text-weight-semibold mr-2'>
                <div className='mb-3 is-size-3'> 
                    <span className='has-text-success-dark'> {book.title}</span>
                </div>
                <div className='my-3'> 
                    <span className='has-text-weight-light' >{book.author}</span>
                </div>
                <div className='my-2'> 
                    <span className='has-text-weight-medium'>
                    {book.shortDescription}</span>
                </div>
                {expanded ? (
                    <button className='my-1 button is-small is-rounded is-outlined has-text-success-dark' type="button" aria-expanded="true" onClick={() => setExpanded(!expanded)}>Show Less</button>  
                    ) : (
                    <button className='my-1 button is-small is-rounded is-outlined has-text-success-dark' type="button" aria-expanded="false" onClick={() => setExpanded(!expanded)}>Show More</button>
                    )}
                {expanded ? (
                    <Detail book={book} key={index} />
                    ): (
                    ''
                    )}
            </div>
        </div>
        )
    };   