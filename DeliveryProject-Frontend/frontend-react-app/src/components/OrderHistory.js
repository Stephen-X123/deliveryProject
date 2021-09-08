import React from "react";
import '../css/OrderHistory.css'
import { Link } from "react-router-dom";
import '../css/OrderHistory.css'
import { List, Row, Col, Button } from 'antd';
import Item from "antd/lib/list/Item";
import { Route } from "react-router-dom";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

const data = [
  {'order_number' : "364179604",
  'order_status' : "Order Placed",
  'sender' : "Rick Sun",
  'receiver' : "Sean",
  'actual_pick_up_time' : "08:00 AM 08/24/2021"},
  
  
  {'order_number' : "777259151",
  'order_status' : "Picking Up",
  'sender' : "Rick Sun",
  'receiver' : "Sean",
  'actual_pick_up_time' : "09:00 AM 08/25/2021"}
  ];
class OrderHistory extends React.Component {

  render() {
    return (
      <>
        <h1 style = {{left : '10vw', position : 'absolute', top : '15vh'}}>Order History</h1>
        <List
        style = {{marginTop: '10vh', borderColor : 'transparent'}}
        size="large"
        //header={<div><h3 style = {{left : '10vw', position : 'absolute', marginBottom : '30vh', top : '0vh'}}>Order History</h3></div>}
        bordered
        dataSource={data}
        renderItem={item => <div style = {{width : '77vw' , height : '20vh', backgroundColor : 'whitesmoke', 
        marginTop : '5vh', borderRadius : '20px', left : '10vw', position : "relative"}}><List.Item>{
          <>
          <span style = {{marginBottom : '1vh'}}> 
            <Row justify="space-between">
              <Col><h4 style = {{left : '0vw', postion : 'absolute'}}><b>Order Number</b> {item.order_number}</h4></Col>
              <Col><h4 style = {{left : '30vw', postion : 'absolute'}}><b>From</b> {item.sender}</h4></Col>
              <Col><h4 style = {{right: '0vw', postion : 'absolute'}}><b>To</b> {item.receiver}</h4></Col>
            </Row>
            <hr style = {{width : '73vw', color : 'black', left : '-5vw'}}/>
            <Row justify="space-between">
              <span>
                <h2 style = {{display : 'inline', marginRight : '10vw'}}>{item.order_status}</h2>
                <h2 style = {{display : 'inline'}}>Pick Up Time {item.actual_pick_up_time}</h2>
              </span>
              <span>
                <Col>
                  <Link to = "/tracking">
                            <h5 style = {{color : 'blue'}}>
                                Track My Order
                            </h5>
                  </Link>
                  <Link to = "/orderdetails">
                            <h5 style = {{color : 'blue'}}>
                                Order Details
                            </h5>
                  </Link>
                </Col>
              </span>
              </Row>
          </span>
          </>
          }</List.Item></div>}
        />
      </>
    );
  }
}

export default OrderHistory;
