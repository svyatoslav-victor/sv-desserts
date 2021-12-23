import React, { useState } from 'react';
import './Main.scss';

const reviews = [
  { link: require('../../images/backgrounds/reviews/1.jpg'), name: '1' },
  { link: require('../../images/backgrounds/reviews/2.jpg'), name: '2' },
  { link: require('../../images/backgrounds/reviews/3.jpg'), name: '3' },
]

export const Main: React.FC = () => {
  const [forward, setForward] = useState(0);
  const [i, setI] = useState(0);

  return (
      <>
      <div
        className='Main__Wrapper'
      >
        <ul
          className='Main__List'
        >
          {reviews.map((item, index) => (
            <li
              key={index}
              className='Main__List--Item'
              style={{transform: `translate(${forward.toString()}vw)`}}
            >
              <img
                src={item.link}
                alt="placeholder"
                className='Main__List--Image'
              />
            </li>
          ))}
        </ul>
        <button
          type='button'
          className='Button Button--Back'
          disabled={i === 0}
          onClick={() => {
            setForward(forward + 100);
            setI(i - 1);
          }}
        >
          <span className='left'>&#8249;</span>
        </button>
        <button
          type='button'
          className='Button Button--Forward'
          disabled={i === reviews.length - 1}
          onClick={() => {
            setForward(forward - 100);
            setI(i + 1);
          }}
        >
          <span className='right'>&#8250;</span>
        </button>
      </div>
    </>
  );
};
