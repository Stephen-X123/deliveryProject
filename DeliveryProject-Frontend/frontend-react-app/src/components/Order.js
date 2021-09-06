import React from "react";
import '../css/Order.css';
import { Steps } from 'antd';
const { Step } = Steps

export default class Order extends React.Component {
  render() {
    return (
      <div className="order-background">
        <Steps current={0} onChange={this.onChange} direction="vertical" className="steps">
          <Step title="Step 1" description="Address + Package + Pickup time" />
          <Step title="Step 2" description="Payment Information" />
          <Step title="Step 3" description="Order Confirmation" />
        </Steps>
      </div>
    );
  }
}
