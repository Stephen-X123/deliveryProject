import React from "react";
import styled from 'styled-components'
import { Form, Input, Button, Row } from 'antd'
import { extrawideinput, extrawidehalfinput, negVertMargin } from "../Constants";

export default class PaymentInfo extends React.Component {
  Form = styled(Form)`
  .ant-form-item .ant-input {
    background-color: #E8E8E8
  }
  .ant-form-item {
    margin-bottom: 3.5vh;
  }
  
  `;

  flipBackwards = () => {
    this.props.incrementPage(-1);
  }

  submitForm = (values) => {
    console.log(values)
    this.props.setState(
      {
        "creditCard": values
      });
    this.props.incrementPage(1);
  }

  render() {
    return (
      <this.Form style={{ marginTop: '-5vh' }} onFinish={this.submitForm}>
        <Form.Item>
          <h2 style={negVertMargin}>
            Credit Card Number
          </h2>
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Please enter the credit card number.' }]}
          name="cardNumber"
        >
          <Input placeholder="Credit Card Number"
          />
        </Form.Item>
        <Row justify="space-between" style={{ width: '30vw' }}>
          <Form.Item
            rules={[{ required: true, message: 'Please enter the first name of the card holder.' }]}
            name="firstName"
          >
            <Input placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: 'Please enter the last name of the card holder.' }]}
            name="lastName"
          >
            <Input placeholder="Last Name"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: 'Please enter the expiration date in MM/YY form.' }]}
            name="expirationDate"
          >
            <Input placeholder="Expiration MM/YY" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: 'Please enter the cvv.' }]}
          >
            <Input placeholder="cvv" />
          </Form.Item>
        </Row>
        <Form.Item>
          <h2 style={negVertMargin}>
            Billing Address
          </h2>
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Please enter the billing address.' }]}
          name="address"
        >
          <Input placeholder="Address"
            style={extrawideinput}
          />
        </Form.Item>
        <Row justify="space-between" style={{ width: '30vw' }}>
          <Form.Item
            rules={[{ required: true, message: 'Please enter the name under the billing address.' }]}
          >
            <Input placeholder="Name"
              style={extrawidehalfinput}
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: 'Please enter the zip code' }]}
            name="zipCode"
          >
            <Input placeholder="Zip Code" style={extrawidehalfinput} />
          </Form.Item>
        </Row>
        <Form.Item style={{ left: '5vw', position: 'relative' }}>
          <Button style={{ width: '7vw ', marginRight: '5vw' }} onClick={this.flipBackwards}>
            Previous
          </Button>
          <Button type="primary" htmlType="submit" style={{ width: '7vw ' }}>Next</Button>
        </Form.Item>
      </this.Form>
    )
  }
}