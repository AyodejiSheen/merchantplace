import React, { Fragment } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';


//Alert
import { Alert } from './utils/alert'


//for animation
import Aos from 'aos';
import 'aos/dist/aos.css'


//states
import AuthState from './context/auth/state'
import AlertState from './context/alert/state'
import ShopState from './context/shop/state'

//utils
import setAuthToken from './utils/setAuthToken'


//Auth 
import Access from './pages/access.js';
import Signup from './components/auth/signup.js';
import Signin from './components/auth/signin.js';
import Twostep from './components/auth/twostep.js';
import ResetPassword from './components/auth/resetpassword.js';
import Newpassword from './components/auth/newpassword.js';
import GoogleAuth from './components/auth/googleauth.js';



//Shop setup 
import Shop from './pages/shop'
import CheckName from './components/shop/checkname';
import SetUp from './components/shop/setup'


//Dashboard components
import DashboardGuard from './components/dashboard/layout/dashboardGuard'
import DashboardLayout from './components/dashboard/layout/dashboardLayout';



//Error page
import Errorpage from './404.js';
import Home from './components/dashboard/layout/home';


Aos.init({ duration: 1000 });

if (sessionStorage.ctoken) {
  setAuthToken(sessionStorage.ctoken)
}


const App = () => {

  return (
    <Fragment>
      <ShopState>
        <AuthState>
          <AlertState>
            <Alert />
            <Routes>
              <Route path="/" element={<Navigate to="shop" />} />

              {/* Shop setup routes */}
              {/* childern route of shop setup  */}
              <Route path="shop/" element={<Shop />}>
                <Route index element={<CheckName />}></Route>
                <Route path="set-up/:shopname" element={<SetUp />}></Route>
              </Route>

              {/* Authentication  routes */}
              {/* childern route of access    */}
              <Route path="access/" element={<Access />}>
                <Route index element={<Signin />}></Route>
                <Route path="sign-up" element={<Signup />}></Route>
                <Route path="two-steps/:email" element={<Twostep />}></Route>
                <Route path="password-reset" element={<ResetPassword />}></Route>
                <Route path="new-password/:email" element={<Newpassword />}></Route>
                <Route path="googleauth" element={<GoogleAuth />}></Route>
              </Route>



              {/* Dashboard Layout route */}
              <Route path="/dashboard" element={<DashboardGuard> <DashboardLayout /> </DashboardGuard>} >
                  <Route path="home" element={<Home/>}></Route>    
              </Route>


              {/* Error page */}
              <Route path="*" element={<Errorpage />}></Route>
            </Routes>
          </AlertState>
        </AuthState>
      </ShopState>
    </Fragment>
  );
}

export default App;