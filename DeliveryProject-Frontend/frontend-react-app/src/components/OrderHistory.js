import React from "react";
import '../css/OrderHistory.css'
import { Link } from "react-router-dom";
import '../css/OrderHistory.css'
import { Spin, List, Row, Col, message } from 'antd';
import { orderHistory } from './Utils'


const data = [
  {
    'order_number': "364179604",
    'order_status': "Order Placed",
    'sender': "Rick Sun",
    'recipientName': "Sean",
    'actual_pick_up_time': "08:00 AM 08/24/2021"
  },


  {
    'order_number': "777259151",
    'order_status': "Picking Up",
    'sender': "Rick Sun",
    'recipientName': "Sean",
    'actual_pick_up_time': "09:00 AM 08/25/2021"
  },

  {
    "orderId": 75,
    "recipientName": "SF receipt1",
    "fromAddress": "SF 1",
    "toAddress": "SF 2",
    "actualPickUpTime": 1630855005000,
    "createTime": 1631411646000,
    "departTime": null,
    "desiredPickedUpTime": null,
    "deliveryTime": null,
    "totalCost": 30.0,
    "paymentStatus": null,
    "orderStatus": "Delivered",
    "weight": "2",
    "size": "10",
    "review": null
  }
];

class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.updateState();
  }

  updateState = () => {
    orderHistory().then(
      (response) => {
        this.setState({
          data: response
        })
      }
    ).catch(
      (err) => {
        message.error(err.message);
        console.error(err);
      }
    )
  }
  renderloading = () => {
    return <Spin tip="Loading..." className="order-history-loading" />
  }


  render() {
    const { data } = this.state;
    console.log('DATA', data);
    if (data == null) {
      return this.renderloading()
    }
    return (
      <>
        <h1 style={{ left: '10vw', position: 'absolute', top: '15vh' }}>Order History</h1>
        <List
          style={{ marginTop: '10vh', borderColor: 'transparent' }}
          size="large"
          //header={<div><h3 style = {{left : '10vw', position : 'absolute', marginBottom : '30vh', top : '0vh'}}>Order History</h3></div>}
          bordered
          dataSource={data}
          renderItem={item => <div style={{
            width: '77vw', height: '20vh', backgroundColor: 'whitesmoke',
            marginTop: '5vh', borderRadius: '20px', left: '10vw', position: "relative"
          }}><List.Item>{
            <>
              <span style={{ marginBottom: '1vh' }}>
                <Row justify="space-between">
                  <Col><h4 style={{ left: '0vw', postion: 'absolute' }}><b>Order Number</b> {item.orderId}</h4></Col>
                  <Col><h4 style={{ left: '30vw', postion: 'absolute' }}><b>From</b> {item.sender}</h4></Col>
                  <Col><h4 style={{ right: '0vw', postion: 'absolute' }}><b>To</b> {item.recipientName}</h4></Col>
                </Row>
                <hr style={{ width: '73vw', color: 'black', left: '-5vw' }} />
                <Row justify="space-between">
                  <span>
                    <h2 style={{ display: 'inline', marginRight: '10vw' }}>{item.orderStatus}</h2>
                    <h2 style={{ display: 'inline' }}>Pick Up Time {item.stringActualPickUpTime}</h2>
                  </span>
                  <span>
                    <Col>
                      <Link to="/tracking">
                        <h5 style={{ color: 'blue' }}>
                          Track My Order
                        </h5>
                      </Link>
                      <Link to="/orderdetails">
                        <h5 style={{ color: 'blue' }}>
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
