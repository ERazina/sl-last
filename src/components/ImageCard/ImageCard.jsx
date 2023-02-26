import React, { useEffect, useState } from 'react';
// import Button from './../Button/Button';
import { useParams } from 'react-router-dom';
import { images } from '../../api/mock';
import './Card.scss';

function ImageCard() {
  let { id } = useParams();

  const [image, setImage] = useState([]);

  useEffect(() => {
    const image = images.filter((image) => Number(id) === image.id);
    setImage(image);
  }, [id]);

  return (
    <div>
      {image?.map((item) => (
        <img className='image-card' key={item.id} src={item.src} alt={item.name} />
      ))}
    </div>
  );
}

export default ImageCard;
