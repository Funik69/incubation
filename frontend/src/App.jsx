import StartupForm from './components/StartupForm'
import { Route , Routes , BrowserRouter} from 'react-router-dom'
import Home from './home/home'
import About from './aboutUs/aboutUs'
import Programs from './programs/programs'
import Event from './event/event'
import Portfolio from './portfolio/portfolio'
import Contact from './contact/contact'
import Header from './header/header'
import Footer from './footer/footer'
import Eligibility from './eligibility/eligibility'
import Thanks from './thankYou/thanks'
import './App.css';
import scrolltop from './scrolltop'
function App() {
    return (
    <div className='app-main'>
      <BrowserRouter>
      <scrolltop />
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
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
