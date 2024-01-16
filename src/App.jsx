import './index.css'
import './App.css'
import  ImageInfo  from "../public/IMAGES/Images.json"
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
      <>CardOne</>
      <>CardTwo</>

  </main>
  </div>
  
  <footer className='footer'>
    <p>adresse: Grand park avenue 73</p>
    <p> email: fishHub@gmail.com</p>
  </footer>
  </>
)

}

 function CardOne({ImageInfo}){
  return (<>
   <img src={ImageInfo[0].src} alt="" />
    <p>{ImageInfo[0].text}</p>

    <img src={ImageInfo[1].src} alt="" />
    <p>{ImageInfo[1].text} test endring</p>

    <img src={ImageInfo[2].src} alt="" />
    <p>{ImageInfo[2].text} test 2</p> 
    
    </>
    )
}

function CardTwo({ImageInfo}){
  return (<>
 
 <img src={ImageInfo[3].src} alt="" />
    <p>{ImageInfo[3].text}</p>

    <img src={ImageInfo[4].src} alt="" />
    <p>{ImageInfo[4].text} test 3</p>

    <img src={ImageInfo[5].src} alt="" />
    <p>{ImageInfo[5].text}</p>
    </>
    )
}