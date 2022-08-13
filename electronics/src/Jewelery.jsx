import {React,useContext} from 'react'
import {NewContext} from './App.js'
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
function Jewelery() {
  const { Meta } = Card; 
  const {storedata} = useContext(NewContext)
  return (
    <div>
      <div className='container '>
        <br/>
        <h2>Jewellery</h2>
<br/>
        <Row gutter={16}>
          {Object.keys(storedata).map((value,index) => {
            if(storedata[index].category=="jewelery")
            return(
<Col sm={24} md={6} className="col d-flex justify-content-center">
<Link to={`/storedetails/${storedata[index].id}`}>
        <Card
    hoverable
    style={{ width: 240, height: 450}}
    cover={<img alt="example" src={storedata[index].image} style={{height:'17rem'}}/>}
  >
    <Meta title={storedata[index].title}/>
    <br/>
    <h4 style={{fontFamily:'Times New Roman,Serif'}}>Price : ${storedata[index].price}</h4>
  </Card>
  </Link>
  <br/><br/>
  </Col>
            )
          })}
        
  </Row>
  </div>
    </div>
  )
}

export default Jewelery