import './App.css'
import CopyRigh from './assets/components/CopyRigh';
import FifthSet from './assets/components/FifthSet';
import FirstSet from './assets/components/FirstSet';
import Footer from './assets/components/Footer';
import ForthSet from './assets/components/ForthSet';
import Header from './assets/components/Header';
import SecondSet from './assets/components/SecondSet';
import ThirdSet from './assets/components/ThirdSet';


function App() {
  return (
    <>
    <div className='container'>
        <div className='second'>
            <ul className='d-flex gap-5 list-unstyled'>
            <li>Cost Calculator</li>
            <li>Discover Stores</li>
            <li>Track Orders</li>
            </ul>
        </div>
        <div className='d-flex gap-5'>
        <div >
            <p className='d-none d-lg-flex' >Need help? Call:</p>
            <p className='contact'>+2347069000083 <span className='d-none d-lg-flex'>or</span> +2349035000505</p>
        </div>
        <img src={'https://res.cloudinary.com/dyzdckuxi/image/upload/v1746540545/contact_us_on_2348099561000_gsbecq.svg'} alt="" />
        <div className='button btn'>
          <div>
            <img src={"https://res.cloudinary.com/dyzdckuxi/image/upload/v1746540497/nigerian_flag_te4jrg.svg"} alt="" />
          </div>
          <div>
            Nigeria
          </div> 
        </div>
        </div>
    </div>
    <Header/>
    <FirstSet/> 
    <SecondSet/>
    <ThirdSet/>
    <ForthSet/>
    <FifthSet/>
    <Footer/>
    <CopyRigh/>
    
    
    </>
  )
}

export default App
