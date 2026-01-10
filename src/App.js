import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart/cart';
import { WishList } from './pages/Wishlist/wishlist';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
    </Routes>
  );
}

export default App;
