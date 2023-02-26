import React from 'react';
import Button from './../Button/Button';
import { Row, Col } from 'antd';
import { images } from '../../api/mock';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

function Home() {
  const navigate = useNavigate();
  const goToGallery = () => {
    return navigate(`/gallery`);
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
            // <div className='image-div' key={image.id} style={{ backgroundImage: `url(${image.src}})` }} onClick={goToGallery}></div>
            <img className='image-card' key={image.id} src={image.src} alt={image.name} onClick={goToGallery} />
          ))}
        </div>
      </Row>

      {/* 
        <Col xs={2} sm={4} md={6} lg={8} xl={10} />
        <Col span={6} />
        <Col span={6} />
        <Col span={6} /> */}
      {/* <Row gutter={[8, 8]}>
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
      </Row> */}

      <Button link={true} value='TO GALLERY' redirect='/gallery' />
    </div>
  );
}

export default Home;
