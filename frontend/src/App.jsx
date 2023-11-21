import React from 'react'
import StartupForm from './components/StartupForm'
import { Route , Routes , BrowserRouter} from 'react-router-dom'
import Home from './home/home'
import About from './aboutUs/aboutUs'
import Programs from './programs/programs'
import Event from './event/event'
import Portfolio from './portfolio/portfolio'
import Contact from './contact/contact'
import Header from './header/header'
import Login from './auth/login'
import Register from './auth/register'
import Otp from './auth/otp'
import Forgot from './auth/forgot_password'
import Footer from './footer/footer'
import Eligibility from './eligibility/eligibility'
import Thanks from './thankYou/thanks'
import InvestThanks from './thankYou/investThanks'
import Getdata from './components/admin/getdata'
import Acceptedidea from './components/admin/Acceptedidea'
import UserList from './components/admin/UserList'
import Userdash from './userDashboard/userdash'
import Userprofile from './userDashboard/Userprofile'
import Reset from './auth/reset'
import Collaborate from './collaborate/collaborate'
import Investor from './collaborate/investor'
import InvestForm from './collaborate/investform'
import Mentor from './collaborate/mentor'
import MentorForm from './collaborate/mentorform'
import ColSlider from './colslider/colslider'
import './App.css';
import Admindash from './components/admin/admindash'
import { DataProvider } from './context/DataContext'
import { AuthProvider } from './context/AuthContext'
import FullPage from './components/admin/FullPage'
import Singlepage from './components/admin/Singlepage'
import InactiveStartup from './components/admin/InactiveStartup'
import UserStartupview from './userDashboard/UserStartupview'
function App() {
    return (
    <div className='app-main'>
      <BrowserRouter>
      <DataProvider>
      <AuthProvider>
      <Header />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/programs' element = {<Programs />} />
          <Route path='/event' element = {<Event />} />
          <Route path='/portfolio' element = {<Portfolio />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/eligibility' element = {<Eligibility />} />
          <Route path='/thanks' element = {<Thanks />} />
          <Route path='/investthanks' element={<InvestThanks/>}/>
          <Route path='/StartupForm' element = {<StartupForm />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/register' element = {<Register />} />
          <Route path='/otp' element = {<Otp />} />
          <Route path='/forgot-password' element = {<Forgot />} />
          <Route path='/fetch' element= {<Getdata/>}/>
          <Route path='/collaborate' element = {<Collaborate/>} />
          <Route path='/investor' element = {<Investor/>} />
          <Route path='/investform' element = {<InvestForm/>} />
          <Route path='/mentor' element = {<Mentor/>} />
          <Route path='/mentorform' element = {<MentorForm/>} />
          <Route path='/useridea' element = {<Userdash />} />
          <Route path='/userdash' element = {<Userprofile />} />
          <Route path='/admindash' element={<Admindash/>}/>
          <Route path='/inactive' element={<InactiveStartup/>}/>
          <Route path='/userlist' element={<UserList/>}/>
          <Route path='/acceptedIdea' element={<Acceptedidea/>}/>
          <Route path='/colslider' element={<ColSlider/>}/>
          <Route path='/viewdata/:id' element={<FullPage/>}/>
          <Route path='/singlepage/:id' element={<Singlepage/>}/>
          <Route path='/viewUserStartup/:id' element={<UserStartupview/>}/>
          
          <Route path='/reset-password/:id/:token' element = {<Reset />} />
          </Routes>
          </AuthProvider>
          </DataProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
