import '../css/Main.css'
import { Link } from "react-router-dom"
import { RightSquareOutlined } from "@ant-design/icons";
import { Button, Input, Layout, Row, Col, message } from 'antd';
import React from 'react';
const { Content } = Layout

export default class Main extends React.Component {

  constants = {
    main: 0,
    tracking: 1,
    order: 2,
  }

  state = {
    currentPage: this.constants.main,
  }

  onInputChange = (e) => {
    const { setOrderId } = this.props;
    setOrderId(e.target.value);
  }

  //check if logged in, if not logged in send a message
  //let the user know you cannot click orders without logging in
  onClick = () => {
    if (!this.props.loggedIn) {
      message.error('Please log in before ordering!');
    }
  }

  render() {
    return (
      <Content
        className="content-background"
        style={{
          padding: 24,
          margin: 0,
          height: "100vh",
        }}
      >

        <h2 className="slogan-text">Ship, manage, track, deliver</h2>
        <Row className="ordering" gutter={16}>
          <Col>
            <Input className="order-text-field" placeholder="Enter your order number here" prefix={<RightSquareOutlined />} onChange={this.onInputChange} />
          </Col>
          <Col>
            <Link to="/tracking">
              <Button className="business-button">Track your order</Button>
            </Link>
          </Col>
          <Col>
            <Link to="/order">
              <Button className="business-button" onClick={this.onClick}>Order Now</Button>
            </Link>
          </Col>
        </Row>
      </Content >
    );
  }
}