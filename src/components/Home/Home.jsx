import React from 'react';
import Button from './../Button/Button';
import { Row } from 'antd';
import { images } from '../../api/mock';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

function Home() {
  const navigate = useNavigate();

  const goToItem = (id) => {
    return navigate(`/gallery/image/${id}`);
  };

  return (
    <div className='home'>
      <h1>Svetlana Lebedeva</h1>
      <h2>Artist</h2>
      <p>"Art is not the thing you should understand by your mind, but to feel it with your heart"</p>

      <p>Enjoy watching!</p>

      {/* images */}
      <Row gutter={[8, 8]} className='row'>
        <div className='grid'>
          {images.map((image) => (
            <img className='image-card' key={image.id} src={image.src} alt={image.name} onClick={() => goToItem(image.id)} />
          ))}
        </div>
      </Row>

      <Button link={true} value='TO GALLERY' redirect='/gallery' />
    </div>
  );
}

export default Home;
