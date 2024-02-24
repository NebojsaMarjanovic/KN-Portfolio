import './App.css';
import HomePageCard from './components/HomePageCard';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SegmentCard from './components/SegmentCard';

function App() {

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

  return (
    <BrowserRouter>
    <div className="App">
    <NavigationBar/>
      <Routes>
      <Route
      path=""
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
