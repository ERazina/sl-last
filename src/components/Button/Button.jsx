import React from 'react';
import { NavLink } from 'react-router-dom';
import './Button.scss';

function Button(props) {
  const linkStatus = props.link;
  const value = props.value;

  console.log(value);

  if (!linkStatus) {
  }
  //   const showMore = () => {
  //     console.log('show more');
  //   };

  const link = (
    <NavLink to='/gallery' className='button'>
      {value}
    </NavLink>
  );
  const button = (
    <button value={value} className='button'>
      {value}
    </button>
  );
  return linkStatus ? link : button;
}
export default Button;
