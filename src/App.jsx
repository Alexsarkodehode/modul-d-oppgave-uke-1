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
  <header>Acvarium Gallery</header>
  </div>
  <div className='mainCard'>
    <main>
      <>FirstCard</>
      <>SecondCard</>

  </main>
  </div>
  
  <footer className='footer'>
    <p>adresse: Grand park avenue 73</p>
    <p> email: fishHub@gmail.com</p>
  </footer>
  </>
)

}

 export default function FirstCard(){
  return (<>
   <img src={FishOne} alt="" />
    <p>{FishOne.text}</p>

    <img src={FishTwo} alt="" />
    <p>{FishTwo.text}</p>

    <img src={FishFour} alt="" />
    <p>{FishFour.text}</p> 
    
    </>
    )
}

export default function SecondCard(){
  return (<>
 
 <img src={FishFour} alt="" />
    <p>{FishFour.text}</p>

    <img src={FishFive} alt="" />
    <p>{FishFive.text} test 3</p>

    <img src={FishSix} alt="" />
    <p>{FishSix.text}</p>
    </>
    )
}