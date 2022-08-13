import {React, useContext} from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import {NewContext} from './App.js'
import { Descriptions, Col, Row, Image, Rate} from 'antd';
import { Button } from 'react-bootstrap';
import { MdOutlineArrowBack} from 'react-icons/md';

function Storedetails() {
  
    const {id} = useParams()
    const {storedata} = useContext(NewContext)
    // let navigate = useNavigate()
    
  return (
    <div>
        {storedata.filter(storedata => storedata.id == id).map((storedata,index)=>(
            
             <Row style={{paddingTop:'3%'}}>
         
             <Col xs={24} md={8} className="col d-flex justify-content-center">
           <Link to={-1}>  <MdOutlineArrowBack style={{fontSize:'2rem'}}/> </Link>
           <Image
           
           width={300}
           height={400}
           src={storedata.image}
           style={{paddingLeft:'2%'}}
         />
         
         </Col>
         
         
         <Col xs={24} md={16}>
         
         <Descriptions title={storedata.title}>
     <Descriptions.Item >{storedata.description}</Descriptions.Item>
     
    </Descriptions>
    <h4 style={{fontFamily:'Times New Roman,Serif'}}>Price : ${storedata.price}</h4>
    <Rate allowHalf defaultValue={storedata.rating.rate} />
    <br/><br/>
    <Button variant='dark'>Add to cart</Button>{""}
    <br/>
    
    <p style={{fontSize:'0.8rem',paddingTop:'1%'}}>Only {storedata.rating.count} left on stock. Hurry up!!</p>
           </Col>
            
           </Row>

        ))}
       
    </div>
  )
}

export default Storedetails