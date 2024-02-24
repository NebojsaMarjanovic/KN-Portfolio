import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SegmentNavigationBar from './SegmentNavigationBar';

function SegmentCard(){

  const witcherImages = [
    { segment:1, name: 'Witcher1', imageUrl: process.env.PUBLIC_URL +'/img/witcher.jpg' },
    { segment:1, name: 'Witcher2', imageUrl: process.env.PUBLIC_URL +'/img/witcher.jpg' },
    { segment:1, name: 'Witcher3', imageUrl: process.env.PUBLIC_URL +'/img/witcher.jpg' },
    { segment:1, name: 'Witcher4', imageUrl: process.env.PUBLIC_URL +'/img/witcher.jpg' }
  ]; 
  const swordImages = [
    { segment:2, name: 'Sword1', imageUrl: process.env.PUBLIC_URL +'/img/sword.jpg' },
    { segment:2, name: 'Sword2', imageUrl: process.env.PUBLIC_URL +'/img/sword.jpg' },
    { segment:2, name: 'Sword3', imageUrl: process.env.PUBLIC_URL +'/img/sword.jpg' },
    { segment:2, name: 'Sword4', imageUrl: process.env.PUBLIC_URL +'/img/sword.jpg' },
  ]; 
  const cakeImages = [
    { segment:3, name: 'Cake1', imageUrl: process.env.PUBLIC_URL +'/img/kratos.jpg' },
    { segment:3, name: 'Cake2', imageUrl: process.env.PUBLIC_URL +'/img/kratos.jpg' },
    { segment:3, name: 'Cake3', imageUrl: process.env.PUBLIC_URL +'/img/kratos.jpg' },
    { segment:3, name: 'Cake4', imageUrl: process.env.PUBLIC_URL +'/img/kratos.jpg' },
  ]; 
  const drakeImages = [
    { segment:4, name: 'Dragon1', imageUrl: process.env.PUBLIC_URL +'/img/drake.jpg' },
    { segment:4, name: 'Dragon2', imageUrl: process.env.PUBLIC_URL +'/img/drake.jpg' },
    { segment:4, name: 'Dragon3', imageUrl: process.env.PUBLIC_URL +'/img/drake.jpg' },
    { segment:4, name: 'Dragon4', imageUrl: process.env.PUBLIC_URL +'/img/drake.jpg' },
  ]; 



  const location = useLocation();
  const{state}=location;
  const [images,setImages]=useState([]);

  useEffect(()=>{
    console.log(location.pathname);
    if(location.pathname==='/witcher')
      setImages(witcherImages);
    else if(location.pathname==='/sword')
      setImages(swordImages);
    else if(location.pathname==='/cake')
      setImages(cakeImages);
    else if(location.pathname==='/drake')
      setImages(drakeImages);
    else
    setImages([...witcherImages, ...swordImages,...cakeImages,...drakeImages])
  },[location.pathname])

 


      return(
      <div>
          <SegmentNavigationBar/>
      <div className="image-container">
      {Array.from(images).map((image, index) => (
        <div key={index} className="image-item">
          <img
            src={image.imageUrl}
            alt={image.name}
          />
        </div>
      ))}
    </div>
    </div>
      )
}

export default SegmentCard;