import React from "react";
import '../css/Order.css';
import { Steps, Form, Input, Row, message } from 'antd';
import FromTo from './Forms/FromTo';
import PaymentInfo from './Forms/PaymentInfo'
import Confirmation from './Forms/Confirmation'
import OrderComplete from "./Forms/OrderComplete";
import { order } from "./Utils"
const { Step } = Steps;

export default class Order extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      // Four pages (form 1 (from address to addresa and other info), form 2 (payment info),
      // Form 3 (confirm order info is correct)), last page is confirming the purchase is successful and return orderId.
      forms: [
        <FromTo incrementPage={this.incrementPage} setState={this.updateState} />,
        <PaymentInfo incrementPage={this.incrementPage} setState={this.updateState} />,
        <Confirmation setState={this.updateState} completeForm={this.completeForm}
          order={this.state.Order} droneOrRobot={this.state.droneOrRobot} />
      ],
      //If form complete, turn to form complete page.
      formComplete: false,
      testing: false
    }
  }

  //current will be 0,1,2. Because antd steps component assigns each step to incrementing current's.
  //Each number corresponds to a form (0/1/2)=>(FromTo.js/PaymentInfo.js/Confirmation.js)
  state = {
    current: 0,
  }

  // @Id
  // private long cardNumber;
  // private int userID;
  // private String firstName;
  // private String expirationDate;
  // private int cvv;
  // private String lastName;
  // private String zipCode;
  // private String address;

  //When the form is completed on OrderComplete.js, clicking submit will result in 
  //this function being called, which will collect all the form information from 0,1,2 pages
  //which is collected on this.state.Order and reorganize it to be sent to the backend.
  completeForm = () => {
    console.log('Order Here:', this.state.Order)
    const { date, fromAddress, orderStatus, size, toAddress, totalCost, packageWeight,
      sendingName, sendingPhone, receivingPhone, recipientName } = this.state.Order;

    //convert from form induced string to int(backend takes int credit card info only)
    this.state.CreditCard.cvv = parseInt(this.state.CreditCard.cvv)

    //add fields needed by the backend order.
    //(by doing this remove fields that are in this.state.Order but aren't needed in the backend).
    const newOrder = {
      actualPickUpTime: date,
      fromAddress: fromAddress,
      orderStatus: 'Ordered',
      size: this.state.testing ? size : size[0],
      toAddress: toAddress,
      totalCost: totalCost,
      weight: this.state.testing ? this.state.Order.weight : packageWeight[0],
      senderName: sendingName,
      senderPhoneNumber: sendingPhone,
      recipientName: recipientName,
      recipientPhoneNumber: receivingPhone,
      deliveryMethod: this.state.droneOrRobot,
      estimatedDeliveryTime: this.state.estimatedDeliveryTime,
      totalCost: this.state.totalCost
    };
    //checking that order that is sent back has correct format
    console.log('order to backend', {
      order: newOrder,
      credit_card: this.state.CreditCard
    })
    order({
      order: newOrder,
      credit_card: this.state.CreditCard
    }).then(
      (data) => {
        this.setState({
          formComplete: true
        });
        message.success('Order complete!');
        //backend generates orderId from new order added and we attach it to orderId to be displayed in
        //order complete page.
        this.setState({
          orderId: data
        });
      }
    ).catch(
      (err) => {
        message.error(err.message)
      }
    )
  }

  //Give ability to edit order's state to other components(This is probably bad practice), if you pass this function.
  updateState = (newState) => {
    //console.log('updatestate', newState);
    //console.log('old state', this.state);
    this.setState(newState);
    //console.log('after set state', this.state)
  }

  onChange = (newCurrent) => {
    if (this.state.Order == null && newCurrent >= 2) {
      message.error("Cannot go to step 3 without completing forms at step 1 and step 2.");
      return;
    }
    this.setState({
      current: newCurrent,
    });
    if (newCurrent >= 2) {
      this.setState({
        forms: [
          <FromTo incrementPage={this.incrementPage} setState={this.updateState} />,
          <PaymentInfo incrementPage={this.incrementPage} setState={this.updateState} />,
          <Confirmation setState={this.updateState} completeForm={this.completeForm} order={this.state.Order} orderId={this.state.orderId} />
        ]
      });
      console.log('>=2')
    }
  }

  //This function is passed to other components, so they may modify which page of the order component they are on.
  incrementPage = (increment) => {
    this.setState({
      current: this.state.current + increment,
    });
    this.setState({
      forms: [
        <FromTo incrementPage={this.incrementPage} setState={this.updateState} />,
        <PaymentInfo incrementPage={this.incrementPage} setState={this.updateState} />,
        <Confirmation setState={this.updateState} completeForm={this.completeForm} order={this.state.Order} orderId={this.state.orderId} />
      ]
    });
  }

  render() {

    const { forms, current, formComplete } = this.state;
    return (
      !formComplete ?
        <div className="order-background" >
          {/* Bar on the right to select steps */}
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
        </div> : <OrderComplete setState={this.updateState} orderId={this.state.orderId} />
    )
  }
}