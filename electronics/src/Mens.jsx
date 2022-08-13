import {React, useContext} from 'react'
import { Card, Col, Row } from 'antd';
import { NewContext } from './App';
import { Link } from 'react-router-dom';

function Mens() {
    const { Meta } = Card; 
    const {storedata} = useContext(NewContext);
    console.log("details",storedata);
    
  return (
    <div>
      <div className='container'>
        <br/>
        <h2>Men's Collection</h2>
<br/>
<div className='row'>
        <Row gutter={16}>
          {Object.keys(storedata).map((value,index) =>{
            console.log('objectdetails',value);
            if(storedata[index].category=="men's clothing")
            return(
<Col sm={24} md={6} className="col d-flex justify-content-center">
  <Link to={`/storedetails/${storedata[index].id}`} >
        <Card
    hoverable
    style={{ width: 250, height: 450}}
    cover={<img alt="example" src={storedata[index].image} style={{height:'20rem'}}/>}
  >
    <Meta title={storedata[index].title}/>
    <br/>
    <h4 style={{fontFamily:'Times New Roman,Serif'}}>Price : ${storedata[index].price}</h4>
  </Card>
  </Link>
  </Col>
            )
          })}     
  </Row>
  </div>
  </div>
    </div>
  )
}

export default Mens