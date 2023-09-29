import StartupForm from './components/StartupForm'
import { Route , Routes , BrowserRouter } from 'react-router-dom'
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
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/programs' element = {<Programs />} />
          <Route path='/event' element = {<Event />} />
          <Route path='/portfolio' element = {<Portfolio />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/StartupForm' element = {<StartupForm />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/register' element = {<Register />} />
          <Route path='/otp' element = {<Otp />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
