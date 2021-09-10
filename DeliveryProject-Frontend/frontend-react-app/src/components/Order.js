import React from "react";
import '../css/Order.css';
import { Steps, Form, Input, Row } from 'antd';
import FromTo from './Forms/FromTo';
import PaymentInfo from './Forms/PaymentInfo'
import Confirmation from './Forms/Confirmation'
import OrderComplete from "./Forms/OrderComplete";
const { Step } = Steps

export default class Order extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      forms: [
        <FromTo incrementPage={this.incrementPage} setState={this.updateState} />,
        <PaymentInfo incrementPage={this.incrementPage} setState={this.updateState} />,
        <Confirmation setState={this.updateState} completeForm={this.completeForm}
          order={this.state.Order} droneOrRobot={this.state.droneOrRobot} />
      ],
      formComplete: false,
    }
  }

  //current will be 0,1,2. Because antd steps component assigns each step to incrementing current's.
  state = {
    current: 0,
  }

  completeForm = () => {
    this.setState({
      formComplete: true
    })
  }

  updateState = (newState) => {
    console.log('updatestate', newState);
    console.log('old state', this.state);
    this.setState(newState);
    console.log('after set state', this.state)
  }

  fromToForm2 =
    (<Form>
      <Form.Item>
        <h2>
          From
        </h2>
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: 'Please enter the sending address.' }]}
      >
        <Input placeholder="Address" />
      </Form.Item>
    </Form>)

  onChange = (newCurrent) => {
    this.setState({
      current: newCurrent,
    });
    if (newCurrent >= 2) {
      this.setState({
        forms: [
          <FromTo incrementPage={this.incrementPage} setState={this.updateState} />,
          <PaymentInfo incrementPage={this.incrementPage} setState={this.updateState} />,
          <Confirmation setState={this.updateState} completeForm={this.completeForm} order={this.state.Order} />
        ]
      });
      console.log('>=2')
    }
  }

  incrementPage = (increment) => {
    this.setState({
      current: this.state.current + increment,
    });
    this.setState({
      forms: [
        <FromTo incrementPage={this.incrementPage} setState={this.updateState} />,
        <PaymentInfo incrementPage={this.incrementPage} setState={this.updateState} />,
        <Confirmation setState={this.updateState} completeForm={this.completeForm} order={this.state.Order} />
      ]
    });
  }

  render() {

    const { forms, current, formComplete } = this.state;
    return (
      !formComplete ?
        <div className="order-background" >
          <Steps current={current} onChange={this.onChange} direction="vertical" className="steps">
            <Step title="Step 1" description="Address + Package + Pickup time" />
            <Step title="Step 2" description="Payment Information" />
            <Step title="Step 3" description="Order Confirmation" />
          </Steps>
          <div className="form">
            {
              forms[current]
            }
          </div>
        </div> : <OrderComplete setState={this.updateState} />
    )
  }
}