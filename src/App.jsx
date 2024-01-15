import './index.css'
import IMAGES from './IMAGES/Images'


function app(){
return (
  <>
  <div>
  <header>FishHub Gallery</header>
  </div>
  <div>
  <main>
    <p>Welcome to Fishhub. Here we display the most beautiful fish around the world</p>
    <img src={IMAGES.fish1} alt='./src/IMAGES/fish1.jpg'/>
    <img src={IMAGES.fish2} alt='./src/IMAGES/fish2.jpg"'/>
    <img src={IMAGES.fish3} alt='.src//IMAGES/fish3.jpg'/>
  </main>
  </div>
  <footer>
    <p>adresse: Grand park avenue 73</p>
    <p> email: fishHub@gmail.com</p>
   
  </footer>
  </>
)
}

export default app; 