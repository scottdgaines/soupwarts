import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import ravenclaw from '../assets/ravenclaw.jpeg'
import gryffindor from '../assets/gryffindor.jpeg'
import hufflepuff from '../assets/hufflepuff.jpeg'
import slytherin from '../assets/slytherin.jpeg'
import './Home.css'

type Quote = {
  quote: {
    id: number;
    quote: string;
    by: string;
  }};
  
export default function Home({quote}: Quote) {
  return (
    <div>
      <p>Pick your house to be sorted a soup</p>
      <div className='house-container'>
        <Link to='/hufflepuff'>
          <img className='house-imgs hufflepuff' src={hufflepuff} />
        </Link>
        <Link to='/ravenclaw'>
          <img className='house-imgs ravenclaw' src={ravenclaw} />
        </Link>
        <Link to='/gryffindor'>
          <img className='house-imgs gryffindor' src={gryffindor} />
        </Link>
        <Link to='/slytherin'>
          <img className='house-imgs slytherin' src={slytherin} />
        </Link>
      </div>
      <p className='quotes'>{`${quote.quote} - ${quote.by}`}</p>
    </div>
  )
}
