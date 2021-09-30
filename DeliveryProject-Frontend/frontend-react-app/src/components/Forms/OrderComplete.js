import React from "react";
import { Row, Col, Button } from 'antd';
import { Link } from "react-router-dom";

export default class OrderComplete extends React.Component {

  onClick = () => {
    this.props.setState({
      formComplete: false,
    })
  }

  render() {
    return (
      <span style={{ position: 'absolute', left: '40vw', top: '40vh' }}>
        <Row>
          <h2 style={{ marginBottom: '2vh' }}>
            Your order has been placed!
          </h2>
        </Row>
        <Row>
          {/* Get id from Order.js, which gets id from backend generated id for order. */}
          <h3 style={{ position: 'relative', left: '3.5vw' }}>
            Order number: {this.props.orderId}
          </h3>
        </Row >
        <Row>
          <Button type="primary" style={{ position: 'relative', top: '5vh', marginRight: '3vw' }}
            onClick={this.onClick}>
            Shop more?
          </Button>
          <Link to="/">
            <Button style={{ position: 'relative', top: '5vh' }}>
              Main Page
            </Button>
          </Link>
        </Row >
      </span>
    );
  }
}