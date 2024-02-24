import './App.css';
import HomePageCard from './components/HomePageCard';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SegmentCard from './components/SegmentCard';

function App() {

  const witcherImages = [
      { segment:1, name: 'Witcher1', imageUrl: process.env.PUBLIC_URL +'/img/witcher.jpg' },
      { segment:1, name: 'Witcher2', imageUrl: process.env.PUBLIC_URL +'/img/witcher.jpg'},
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

  return (
    <BrowserRouter>
    <div className="App">
    <NavigationBar/>
      <Routes>
      <Route
      path="KN-Portfolio"
      element={
        <>
        <HomePageCard images={[...witcherImages, ...swordImages, ...cakeImages, ...drakeImages]}/>
        </>
      }
        />
      <Route
      path="/portfolio"
      element={
        <>
        <SegmentCard imgs={[...witcherImages, ...swordImages, ...cakeImages, ...drakeImages]}/>
        </>
      }
        />
         <Route
      path="/witcher"
      element={
        <>
        <SegmentCard imgs={witcherImages}/>
        </>
      }
        />
         <Route
      path="/sword"
      element={
        <>
        <SegmentCard imgs={swordImages}/>
        </>
      }
        />
         <Route
      path="/cake"
      element={
        <>
        <SegmentCard imgs={cakeImages}/>
        </>
      }
        />
         <Route
      path="/drake"
      element={
        <>
        <SegmentCard imgs={drakeImages}/>
        </>
      }
        />
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
