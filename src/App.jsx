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
  <div className='Header'>
    < Header/>
  </div>
  <div className='Navbar'>
  < Navbar />
  </div>
  <div className='MainCard'>
    <main>
      <div className='FirstCard'>
      <FirstCard/>
      </div>
      <div className='SecondCard'>
      <SecondCard/>
      </div>

  </main>
  </div>
  
  <div className='Footer'>
  <Footer/>
  </div>
  </>
)

}

function Header(){
  return(
    <div className='Header'>
      <h1>Aquarium Gallery</h1>
    </div>
  )
}

  function Navbar(){
    return(
      <div className='navbar'>
        <div className='Logo'>
          <img src="" alt="" />
          <h1>FishHub</h1>
        </div>
        <div className='Menu'>
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


function Footer(){
  return( <>

      <h1>Contant Information</h1>
      <h3>Street: Grand park avenue 73</h3>
      <h3> Email: FishHub@gmail.com</h3>
      <h3>Phone: +109823748246328</h3>
  </>
  )
}