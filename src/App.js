import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart/cart';
import { WishList } from './pages/Wishlist/wishlist';
import { Authorization } from './pages/Authorization';
import { SuccessfullyLoggedIn } from './pages/login-success-or-not/loginSucces';
import { NotSuccessfullyLoggedIn } from './pages/login-success-or-not/loginNotSuccessfull';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/auth/login' element={<Authorization/>}/>
      <Route path='/success' element={<SuccessfullyLoggedIn/>}/>
      <Route path='/failure' element={<NotSuccessfullyLoggedIn/>}/>
    </Routes>
  );
}

export default App;
