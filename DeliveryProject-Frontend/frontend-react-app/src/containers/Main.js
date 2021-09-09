import '../css/Main.css'
import { Link } from "react-router-dom"
import { EnvironmentOutlined } from "@ant-design/icons";
import { Button, Input, Layout, Row, Col } from 'antd';
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

  render() {
    return (
      <Content
        className="content-background"
        style={{
          padding: 24,
          margin: 0,
          height: 1000,
        }}
      >

        <h2 className="slogan-text">Ship, manage, track, deliver</h2>
        <Row className="ordering" gutter={16}>
          <Col>
            <Input  className="order-text-field"
                    placeholder="Enter your order number here"
                    prefix={<EnvironmentOutlined />}
                    onChange={this.onInputChange}/>
          </Col>
          <Col>
            <Link to="/tracking">
              <Button className="business-button">Track your order</Button>
            </Link>
          </Col>
          <Col>
            <Link to="/order">
              <Button className="business-button">Order Now</Button>
            </Link>
          </Col>
        </Row>
      </Content >
    );
  }
}