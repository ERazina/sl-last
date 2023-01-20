import React from 'react';
import Button from '../Button/Button';
import './Gallery.scss';

function Gallery() {
  const showMore = () => {
    console.log('show more');
  };
  return (
    <div className='gallery'>
      <h1>Gallery</h1>
      <p>
        You can buy my painting from the online gallery or just email me. Links to galleries can be found on the contact page. To see the whole
        picture, go to the card of this picture and open the photo in full screen (for this you need to click on the photo).
      </p>
      {/* filters, landscape, abstraction, things and animals */}

      <Button link={false} value={'SHOW MORE'} onClick={showMore} />
    </div>
  );
}

export default Gallery;
