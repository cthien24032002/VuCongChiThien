import * as React from 'react';
import './style.scss'
import { Link } from 'react-router-dom';
type Props = {
  
};
export function HomeContainer(props: Props) {
  return (
    <div className='home'>
        <div className="home__container">
            <h1 className="home__title"> Welcome to response to the problem</h1>
            <ul className="home__list-problem">
              <li className='problem problem1'>
                <Link to='/problem1-page' className='home__list-problem__link'>
                   <h3>🔣 Problem 1</h3>
                </Link>
              </li>
              <li className='problem problem2'>
                <Link to='/currency-swap' className='home__list-problem__link'>
                   <h3>🍭 Problem 2</h3>
                </Link>
              </li>
              <li className='problem problem3'>
                <Link to='/problem3-page' className='home__list-problem__link'>
                   <h3>🤢 Problem 3</h3>
                </Link>
              </li>
            </ul>
        </div>
    </div>  
  );
};