import React from 'react'
import './App.css';
import Detail from './Detail.js'
import 'bulma/css/bulma.min.css';
import { useState } from 'react'


export default function Book({ book, index }) {
    const [expanded, setExpanded] = useState(false)
    return (
        <div className='box tile has-background-grey-lighter book is-flex-direction-row-reverse'>
            <div className=''>
                <div className='image is-96x96 ml-2'>
                    <img src={book.coverImageUrl} alt='Cover'></img>
                </div>
            </div>
            <div className='has-text-weight-semibold'>
                <div className='my-1'>Title:  
                    <span className='has-text-weight-light'> {book.title}</span>
                </div>
                <div className='my-1'>Author: 
                    <span className='has-text-weight-light' >{book.author}</span>
                </div>
                <div className='my-1 has-text-weight-semibold'>Short description: 
                    <span className='has-text-weight-light'>
                    {book.shortDescription}</span>
                </div>
                {expanded ? (
                    <button className='my-1' type="button" aria-expanded="true" onClick={() => setExpanded(!expanded)}>Show Less</button>  
                    ) : (
                    <button type="button" aria-expanded="false" onClick={() => setExpanded(!expanded)}>Show More</button>
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