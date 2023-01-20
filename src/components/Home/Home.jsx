import React from 'react';
import Button from './../Button/Button';
import { Row, Col } from 'antd';
import './Home.scss';
import { images } from '../../api/mock';

function Home() {
  return (
    <div className='home'>
      <h1>Svetlana Lebedeva</h1>
      <h2>Artist</h2>
      <p>"Art is not the thing you should understand by your mind, but to feel it with your heart"</p>

      <p>Enjoy watching!</p>

      {/* images */}
      <Row gutter={[8, 8]}>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          {images.map((image) => (
            <img className='image-card' key={image.id} src={image.src} alt={image.name} />
          ))}
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10} />
        <Col xs={2} sm={4} md={6} lg={8} xl={10} />
        <Col xs={2} sm={4} md={6} lg={8} xl={10} />

        <Col xs={2} sm={4} md={6} lg={8} xl={10} />
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
      </Row>

      <Button link={true} value='TO GALLERY' />
    </div>
  );
}

export default Home;
