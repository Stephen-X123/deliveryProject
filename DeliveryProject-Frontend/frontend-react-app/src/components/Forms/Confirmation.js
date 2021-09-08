import React from "react";
import { Row, Col, Button } from 'antd';
import '../../css/Order.css';

export default class Confirmation extends React.Component {

  flipBackwards = () => {
    this.props.incrementPage(-1);
  }

  onClick = () => {
    this.props.completeForm();
  }

  render() {
    console.log(this.props.fromTo)
    const {
      hour, minute, sendingName, sendingAddress, sendingPhone, receivingName, receivingAddress, receivingPhone,
      date
    } = this.props.fromTo
    const {
      droneOrRobot
    } = this.props
    return (
      <div style={{ left: '-10vw', position: 'relative' }}>
        <h2>
          Please confirm your order
        </h2>

        <Row justify="space-between">
          <Col>
            <h2>
              From
            </h2>
          </Col>
          <Col>
            <h4 style={{ fontWeight: '200' }}>
              {sendingName}
              <br />
              {sendingPhone}
              <br />
              {sendingAddress}
            </h4>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col>
            <h2>
              To
            </h2>
          </Col>
          <Col>
            <h4 style={{ fontWeight: '200' }}>
              {receivingName}
              <br />
              {receivingPhone}
              <br />
              {receivingAddress}
            </h4>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col>
            <h2>
              By
            </h2>
          </Col>
          <Col>
            <h4 style={{ fontWeight: '200' }}>
              {
                (droneOrRobot === "drone" ? "Drone" : "Robot")
              }
            </h4>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col>
            <h2>
              User Preferred Delivery Time
            </h2>
          </Col>
          <Col style={{ position: 'relative', top: '0.5vh' }}>
            {date.month()}/{date.day()} {hour}:{minute}
          </Col>
        </Row>
        <Row justify="space-between">
          <Col>
            <h2>
              Fee
            </h2>
          </Col >
          <Col>
            {
              (droneOrRobot === "drone" ? "$30" : "$20")
            }
          </Col>
        </Row>
        <Row justify="space-between">
          <Col style={{ marginRight: '10vw' }}>
            <h2>
              Payment Method
            </h2>
          </Col>
          <Col>
            <h2>
              Credit Card
            </h2>
          </Col>
        </Row>
        <div style={{ position: 'relative', left: '3vw', top: '3vh' }}>
          <Button style={{ width: '7vw', marginRight: '5vw' }} onClick={this.flipBackwards}>
            Previous
          </Button>
          <Button type="primary" onClick={this.onClick} style={{ width: '7vw ' }}>Submit Order</Button>
        </div>
      </div>
    );
  }
}