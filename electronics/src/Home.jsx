import {React} from 'react'
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "bootstrap/dist/css/bootstrap.min.css";
import mensclothing from './mensclothing.jpg';
import Clothing1 from './Clothing1.jpg';
import Jewelery from './Jewelery.jpg'
import Carousel from 'react-bootstrap/Carousel'
import './Style.css'


function Home() {
  // const images = [
  //   Clothing1,
  //    mensclothing,
  //    jewelery ,
    
  // ];
  
  return (
    <div>
      {/* <div className='row'>
        <div className='col-md-12 col-sm-12'>
      <SimpleImageSlider
        width={1400}
        height={550}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        loop={true}    
          
      />
      </div> 
      </div> */}
     <Carousel style={{margin:'0.5rem'}} pause={false}>
  <Carousel.Item interval={2000} >
    <img
      className="d-block w-100"
      src={Clothing1}
      alt="First slide"
      style={{height:'40rem'}}
    />
   
  </Carousel.Item>
  <Carousel.Item interval={2000} >
    <img
      className="d-block w-100"
      src={mensclothing}
      alt="Second slide"
      style={{height:'40rem'}}
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2000} >
    <img
      className="d-block w-100"
      src={Jewelery}
      alt="Third slide"
      style={{height:'40rem'}}
    />
    
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Home