import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import LazyLayout from './components/ui/LazyLayout';

const LazyLogin = lazy(() => import('../src/pages/Login'));
const LazyRegister = lazy(() => import('../src/pages/Register'));
const LazyASignIn = lazy(() => import('../src/pages/Login'));
const LazyUserHome = lazy(() => import('../src/pages/user/userhome'));
const LazyUserProduct = lazy(() => import('../src/pages/user/products'));
const LazyUserService = lazy(() => import('../src/pages/user/service'));
const LazyUserAbout = lazy(() => import('../src/pages/About'));
const LazyUserProfile = lazy(() => import('../src/pages/user/Profile'));
const LazyUserViewSer = lazy(() => import('../src/pages/user/service'));
const LazyAdmin = lazy(() => import('../src/pages/admin/adminhome'));


function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<LazyLayout component={LazyLogin} />} />
        <Route path='/register' element={<LazyLayout component={LazyRegister} />} />
        <Route path='/A-SignIn' element={<LazyLayout component={LazyASignIn} />} />
        <Route path='/Log-submit' element={<LazyLayout component={LazyUserHome} />} />
        <Route path='/user-Home' element={<LazyLayout component={LazyUserHome} />} />
        <Route path='/user-Product' element={<LazyLayout component={LazyUserProduct} />} />
        <Route path='/user-Service' element={<LazyLayout component={LazyUserService} />} />
        <Route path='/user-About' element={<LazyLayout component={LazyUserAbout} />} />
        <Route path='/user-Profile' element={<LazyLayout component={LazyUserProfile} />} />
        <Route path='/Services' element={<LazyLayout component={LazyUserViewSer} />} />
        <Route path='/AdminProfile' element={<LazyLayout component={LazyAdmin} />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App