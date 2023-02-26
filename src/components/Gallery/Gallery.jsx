import React from 'react';
import Button from '../Button/Button';
import { images } from '../../api/mock';
import { Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Gallery.scss';

function Gallery() {
  const navigate = useNavigate();

  const showMore = () => {
    console.log('show more');
  };

  const goToItem = (id) => {
    return navigate(`/gallery/image/${id}`);
  };

  return (
    <div className='gallery'>
      <h1>Gallery</h1>
      <p>
        You can buy my painting from the online gallery or just email me. Links to galleries can be found on the contact page. To see the whole
        picture, go to the card of this picture and open the photo in full screen (for this you need to click on the photo).
      </p>
      {/* filters, landscape, abstraction, things and animals */}

      <Row gutter={[8, 8]} className='row'>
        <div className='grid'>
          {images.map((image) => (
            <>
              <img className='image-card' key={image.id} src={image.src} alt={image.name} onClick={() => goToItem(image.id)} />
            </>
          ))}
        </div>
      </Row>

      <Button link={false} value={'SHOW MORE'} onClick={showMore} />
    </div>
  );
}

export default Gallery;
