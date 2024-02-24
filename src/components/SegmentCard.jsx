import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SegmentNavigationBar from './SegmentNavigationBar';

function SegmentCard(){

  const witcherImages = [
    { segment:1, name: 'Witcher1', imageUrl: './img/witcher.jpg' },
    { segment:1, name: 'Witcher2', imageUrl: './img/witcher.jpg' },
    { segment:1, name: 'Witcher3', imageUrl: './img/witcher.jpg' },
    { segment:1, name: 'Witcher4', imageUrl: './img/witcher.jpg' }
  ]; 
  const swordImages = [
    { segment:2, name: 'Sword1', imageUrl: './img/sword.jpg' },
    { segment:2, name: 'Sword2', imageUrl: './img/sword.jpg' },
    { segment:2, name: 'Sword3', imageUrl: './img/sword.jpg' },
    { segment:2, name: 'Sword4', imageUrl: './img/sword.jpg' },
  ]; 
  const cakeImages = [
    { segment:3, name: 'Cake1', imageUrl: './img/kratos.jpg' },
    { segment:3, name: 'Cake2', imageUrl: './img/kratos.jpg' },
    { segment:3, name: 'Cake3', imageUrl: './img/kratos.jpg' },
    { segment:3, name: 'Cake4', imageUrl: './img/kratos.jpg' },
  ]; 
  const drakeImages = [
    { segment:4, name: 'Dragon1', imageUrl: './img/drake.jpg' },
    { segment:4, name: 'Dragon2', imageUrl: './img/drake.jpg' },
    { segment:4, name: 'Dragon3', imageUrl: './img/drake.jpg' },
    { segment:4, name: 'Dragon4', imageUrl: './img/drake.jpg' },
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