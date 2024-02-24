import React from 'react';
import { useNavigate } from "react-router-dom";


function HomePageCard(images){
const navigate = useNavigate();
const segments = [
  { name: 1, imageUrl: process.env.PUBLIC_URL +'/img/witcher.jpg' },
  { name: 2, imageUrl: process.env.PUBLIC_URL +'/img/sword.jpg' },
  { name: 3, imageUrl: process.env.PUBLIC_URL +'/img/kratos.jpg' },
  { name: 4, imageUrl: process.env.PUBLIC_URL +'/img/drake.jpg' }
];

const handleImageClick = (segmentName) => {
  console.log(segmentName)

  if(segmentName===1){
    navigate('/witcher');
  }
  if(segmentName===2){
    navigate('/sword');
  }
  if(segmentName===3){
    navigate('/cake');
  }
  if(segmentName===4){
    navigate('/drake');
  }

};

  return (
    <div className='home-page-container'>
      <div className='site-title'>
        <h1>Kristijan Nikolic</h1><h3>Concept Artist</h3>
      </div>
    <div className="segment-grid">
      {segments.map((segment, index) => (
        <div key={index} className="segment-item">
          <img
            src={segment.imageUrl}
            alt={segment.name}
            onClick={() => handleImageClick(segment.name)}
          />
        </div>
      ))}
    </div>
    </div>
  );
};
export default HomePageCard;
