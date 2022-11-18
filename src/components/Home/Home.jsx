import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './../Button/Button';
import './Home.scss';

function Home() {
  return (
    <div className='home'>
      <h1>Svetlana Lebedeva</h1>
      <h2>Artist</h2>
      <p>"Art is not the thing you should understand by your mind, but to feel it with your heart"</p>

      <p>Enjoy watching!</p>

      {/* images */}
      <Button link={true} value='TO GALLERY' />
    </div>
  );
}

export default Home;
