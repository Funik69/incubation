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
import Getdata from './components/admin/getdata'
import Userdash from './userDashboard/userdash'
import Reset from './auth/reset'
import Collaborate from './Collaborate/collaborate'
import Investor from './collaborate/investor'
import InvestForm from './collaborate/investform'
import Mentor from './collaborate/mentor'
import MentorForm from './collaborate/mentorform'
import './App.css';
function App() {
    return (
    <div className='app-main'>
      <BrowserRouter>
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
          <Route path='/StartupForm' element = {<StartupForm />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/register' element = {<Register />} />
          <Route path='/otp' element = {<Otp />} />
          <Route path='/forgot-password' element = {<Forgot />} />
          <Route path='/fetch' element= {<Getdata/>}/>
          <Route path='/userdash' element = {<Userdash />} />
          <Route path='/collaborate' element = {<Collaborate/>} />
          <Route path='/investor' element = {<Investor/>} />
          <Route path='/investform' element = {<InvestForm/>} />
          <Route path='/mentor' element = {<Mentor/>} />
          <Route path='/mentorform' element = {<MentorForm/>} />
          <Route path='/reset-password/:id/:token' element = {<Reset />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
