import './index.css'
import './App.css'
import  ImageInfo  from "./assets/IMAGES/Images.json"
import FishOne from "./assets/IMAGES/fish1.jpg"
import FishTwo from "./assets/IMAGES/fish2.jpg"
import FishThree from "./assets/IMAGES/fish3.jpg"
import FishFour from "./assets/IMAGES/fish4.jpg"
import FishFive from "./assets/IMAGES/fish5.jpg"
import FishSix from "./assets/IMAGES/fish6.jpg"


export default function App(){
  console.log(ImageInfo)
return (
  <>
  <div className='gallery'>
    < Header/>
  < Navbar />
  </div>
  <div className='mainCard'>
    <main>
      <FirstCard/>
      <SecondCard/>

  </main>
  </div>
  
  <footer className='footer'>
    <p>adresse: Grand park avenue 73</p>
    <p> email: fishHub@gmail.com</p>
  </footer>
  </>
)

}

function Header(){
  return(
    <div className='header'>
      <h1>Acvarium Gallery</h1>
    </div>
  )
}

  function Navbar(){
    return(
      <div className='navbar'>
        <div className='logo'>
          <img src="" alt="" />
          <h1>FishHub</h1>
        </div>
        <div className='menu'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
      </div>
    )
  }

  function FirstCard(){
  return (<>
   <img src={FishOne} />
    <p>{FishOne.text}</p>

    <img src={FishTwo} />
    <p>{FishTwo.text}</p>

    <img src={FishThree} />
    <p>{FishFour.text}</p> 
    
    </>
    )
  }

function SecondCard(){
  return (<>
 
 <img src={FishFour} />
    <p>{FishFour.text}</p>

    <img src={FishFive} />
    <p>{FishFive.text}</p>

    <img src={FishSix} />
    <p>{FishSix.text}</p>
    </>
    )
}