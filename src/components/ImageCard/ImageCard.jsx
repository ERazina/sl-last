import React, { useEffect, useState } from 'react';
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
    <div className='card'>
      {image?.map((item) => (
        <img className='image-card' key={item.id} src={`../${item.src}`} alt={item.name} />
      ))}
    </div>
  );
}

export default ImageCard;
