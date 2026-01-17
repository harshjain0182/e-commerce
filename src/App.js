import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart/cart';
import { WishList } from './pages/Wishlist/wishlist';
import { Authorization } from './pages/Authorization';
import { SuccessfullyLoggedIn } from './pages/login-success-or-not/loginSucces';
import { NotSuccessfullyLoggedIn } from './pages/login-success-or-not/loginNotSuccessfull';
import { ProtectedRoute } from './components/Protected-Route';
import { AddressPage } from './pages/address-page/address-page';
import { AddNewAddress } from './pages/add-new-address';
import { AddressEdit } from './pages/edit-address/edit-address';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Cart' element={
        <ProtectedRoute>
          <Cart/>
        </ProtectedRoute>}/>
      <Route path='/wishlist' element={
        <ProtectedRoute>
          <WishList/>
        </ProtectedRoute>}
      />
      <Route path='/auth/login' element={<Authorization/>}/>
      <Route path='/success' element={
        <ProtectedRoute>
          <SuccessfullyLoggedIn/>
        </ProtectedRoute>
      }/>
      <Route path='/failure' element={<NotSuccessfullyLoggedIn/>}/>

      <Route path='/address' element={
          <AddressPage/>
      }/>

      <Route path='/newaddress' element={
        <AddNewAddress/>
      }/>

      <Route path='/editaddress/:id' element={
        <AddressEdit/>
      }/>

    </Routes>
  );
}

export default App;
