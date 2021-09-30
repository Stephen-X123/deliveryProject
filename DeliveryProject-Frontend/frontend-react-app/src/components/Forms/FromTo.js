import React from "react";
import { Form, Input, Row, Col, Cascader, DatePicker, Button } from "antd";
import styled from 'styled-components';
import moment from "moment";
import { wideinput, mediuminput, negVertMargin, smallVertMargin } from '../Constants';

export default class FromTo extends React.Component {

  constructor(props) {
    super(props)
    //initialize hours and minutes for dropdown
    for (var i = 0; i <= 23; i++) {
      var hour = String(i);
      if (i < 10) {
        hour = '0' + hour;
      }
      this.hours[i] = {
        value: hour,
        label: hour
      }
    }
    for (var i = 0; i <= 59; i++) {
      var minute = String(i);
      if (i < 10) {
        minute = '0' + minute;
      }
      this.minutes[i] = {
        value: minute,
        label: minute
      }
    }
  }

  hours = []

  minutes = []

  baseTimeHour = () => {
    return (new Date()).getHours()
  }

  baseTimeMinute = () => {
    return (new Date()).getMinutes()
  }

  baseTimeTot = () => {
    return this.baseTimeHour() * 60 + this.baseTimeMinute()
  }

  //click on drone or robot button which will result in the choice stored in state.
  chooseDrone = () => {
    this.props.setState({
      droneOrRobot: "drone"
    })
  }

  chooseRobot = () => {
    this.props.setState({
      droneOrRobot: "robot"
    })
    this.setState({
      isDrone: false
    })
  }

  //https://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
  state = {
    droneDeliveryFee: 30,
    robotDeliveryFee: 20,
    droneNewTime: moment(new Date()).add(20, 'm').format('hh:mm'),
    robotNewTime: moment(new Date()).add(30, 'm').format('hh:mm'),
    droneDeliveryTime: moment(new Date()).add(60, 'm').format('hh:mm'),
    robotDeliveryTime: moment(new Date()).add(120, 'm').format('hh:mm'),
    isDrone: true
  }

  //https://stackoverflow.com/questions/56782898/how-to-reduce-spacing-between-antd-form-items
  //Over-riding antd Form component to reduce vertical space between Form.Itm components
  Form = styled(Form)`
  .ant-form-item {
    margin-bottom: 2vh;
  }`;

  droneRobotTextStyle = {
    fontWeight: '200', paddingLeft: '1vw'
  }

  //arrays for dropdown size + weight
  sizes = [
    {
      value: '<50cm x 50cm x 50cm',
      label: '<50cm x 50cm x 50cm'
    },
    {
      value: '50cm x 50cm x 50cm - 1m x 1m x 1m',
      label: '50cm x 50cm x 50cm - 1m x 1m x 1m'
    },
    {
      value: '>1m x 1m x 1m',
      label: '>1m x 1m x 1m'
    },
  ]

  weights = [
    {
      value: '<5kg(Drone)',
      label: '<5kg(Drone)'
    },
    {
      value: '5-10kg(Drone/Robot)',
      label: '5-10kg(Drone/Robot)'
    },
    {
      value: '>10kg(Robot)',
      label: '>10kg(Robot)'
    },
  ]

  onFinish = (form) => {
    form.month = form.date.month();
    form.dayOfMonth = form.date.date();
    form.hour = form.hour[0];
    form.minute = form.minute[0];
    form.day = '2021-' + form.month + '-' + form.dayOfMonth + 'T' + form.hour + ':' + form.minute + ':00';
    this.props.setState({
      Order: form
    });
    this.props.setState({
      testing: false
    });
    if (this.state.isDrone) {
      this.props.setState({
        estimatedDeliveryTime: this.state.robotDeliveryFee,
        totalCost: this.state.robotDeliveryFee
      })
    }
    else {
      this.props.setState({
        estimatedDeliveryTime: this.state.droneDeliveryTime,
        totalCost: this.state.droneDeliveryFee
      })
    }
    this.props.incrementPage(1);
  }

  //This is so testers don't have to enter all the fields every time
  //Enabled testing button near the buttom of the form to allow this.
  testOrder = () => {
    console.log('order to', {
      date: '2021-09-10T12:27:49',
      weight: '10-30kg',
      size: '50cm x 50cm x 50cm - 1m x 1m x 1m',
      fromAddress: '800 N Alameda St, Los Angeles, CA 90012',
      toAddress: '453 S Spring St, Los Angeles, CA 90013',
      totalCost: '30.00',
      orderStatus: 'Ordered',
      hour: '12',
      minute: '27',
      day: '10',
      month: '9',
      ...this.state
    })
    this.props.setState({
      Order: {
        date: '2021-09-10T12:27:49',
        weight: '10-30kg',
        size: '50cm x 50cm x 50cm - 1m x 1m x 1m',
        fromAddress: '800 N Alameda St, Los Angeles, CA 90012',
        toAddress: '453 S Spring St, Los Angeles, CA 90013',
        totalCost: '30.00',
        orderStatus: 'Ordered',
        hour: '12',
        minute: '27',
        day: '10',
        month: '9',
        ...this.state
      },
      CreditCard: {
        address: "SF 123",
        cardNumber: "10101010",
        expirationDate: "01/25",
        firstName: "Ni",
        lastName: "Hao",
        zipCode: "11111",
        cvv: "111"
      },
    });
    this.props.setState({
      testing: true
    })
    this.props.incrementPage(1);
  }

  //One wide input covers roughly two medium inputs + space in between.
  //This kind of set up where one wide input goes on top
  //and two medium inputs go beneath it and the three line up
  //is used for sending info and receiving info and pickup time.
  render() {
    const { droneNewTime, robotNewTime, droneDeliveryFee, robotDeliveryFee }
      = this.state;
    return (
      <this.Form style={{ marginTop: '-5vh' }} onFinish={this.onFinish}>
        <Form.Item>
          <h2 style={negVertMargin}>
            From
          </h2>
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Please enter the sending address.' }]}
          name="fromAddress"
        >
          <Input placeholder="Address"
            style={wideinput}
          />
        </Form.Item>
        <Row justify="space-between" style={{ width: '20vw' }}>
          <Form.Item
            rules={[{ required: true, message: 'Please enter the sender\'s name.' }]}
            name="sendingName"
          >
            <Input placeholder="Name"
              style={mediuminput}
            />
          </Form.Item>
          <Form.Item name="sendingPhone">
            <Input placeholder="Phone" style={mediuminput} />
          </Form.Item>
        </Row>
        <Form.Item>
          <h2 style={negVertMargin}>
            To
          </h2>
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Please enter the receiving address.' }]}
          name="toAddress"
        >
          <Input placeholder="Address"
            style={wideinput}
          />
        </Form.Item>
        <Row justify="space-between" style={{ width: '20vw' }}>
          <Form.Item
            rules={[{ required: true, message: 'Please enter the receiver\'s name.' }]}
            name="recipientName"
          >
            <Input placeholder="Name"
              style={mediuminput}
            />
          </Form.Item>
          <Form.Item name="receivingPhone">
            <Input placeholder="Phone" style={mediuminput} />
          </Form.Item>
        </Row>
        <Form.Item>
          <h2 style={negVertMargin}>
            Package Information
          </h2>
        </Form.Item>
        <Row justify="space-between" style={{ width: '20vw' }}>
          <Form.Item
            rules={[{ required: true, message: 'Please enter the package size.' }]}
            name="size"
          >
            {/* Cascader is a dropdown containing array sizes + weights generated at constructor */}
            <Cascader options={this.sizes} placeholder="sizes" style={mediuminput} />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: 'Please enter the package weight.' }]}
            name="packageWeight"
          >
            <Cascader options={this.weights} placeholder="weights" style={mediuminput} />
          </Form.Item>
        </Row>
        <Form.Item>
          <h2 style={negVertMargin}>
            Drone or Robot
          </h2>
        </Form.Item>
        <Form.Item>
          <Button type="button" className="medium-field" style={{ ...smallVertMargin }} onClick={this.chooseDrone}>
            <Row>
              <h2 style={{ ...this.droneRobotTextStyle, top: '1.5vh', position: 'relative' }}>
                Drone
              </h2>
              <Col style={{ positon: 'relative', top: '-3vh' }}>
                <h5 style={{ ...this.droneRobotTextStyle, marginLeft: '5vw', paddingTop: '0vh' }}>
                  Delivery fee: ${droneDeliveryFee}
                </h5>
                <h5 style={{ ...this.droneRobotTextStyle, marginLeft: '5vw', paddingTop: '-2vh' }}>
                  Estimated Delivery Time: {droneNewTime}
                </h5>
              </Col>
            </Row>
          </Button>
          <br />
          <Button type="button" className="medium-field" style={{ ...smallVertMargin }} onClick={this.chooseRobot}>
            <Row>
              <h2 style={{ ...this.droneRobotTextStyle, top: '1.5vh', position: 'relative' }}>
                Robot
              </h2>
              <Col style={{ positon: 'relative', top: '-3vh' }}>
                <h5 style={{ ...this.droneRobotTextStyle, marginLeft: '5vw' }}>
                  Delivery fee: ${robotDeliveryFee}
                </h5>
                <h5 style={{ ...this.droneRobotTextStyle, marginLeft: '5vw', paddingTop: '-2vh' }}>
                  Estimated Delivery Time: {robotNewTime}
                </h5>
              </Col>
            </Row>
          </Button>
        </Form.Item>
        <Form.Item>
          <h2 style={negVertMargin}>
            Pickup time
          </h2>
        </Form.Item>
        <Form.Item dropdownClassName="datePicker" name="date">
          <DatePicker style={wideinput} />
        </Form.Item>
        <Row justify="space-between" style={{ width: '20vw' }}>
          <Form.Item
            rules={[{ required: true, message: 'Please choose an hour.' }]}
            name="hour"
          >
            <Cascader options={this.hours} placeholder="Hour" style={mediuminput} />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: 'Please choose a minute.' }]}
            name="minute"
          >
            <Cascader options={this.minutes} placeholder="Minute" style={mediuminput} />
          </Form.Item>
        </Row>
        <Form.Item style={{ left: '5vw', position: 'relative' }}>
          <Button type="primary" htmlType="submit" style={{ width: '10vw ' }}>Next</Button>
          {/* <Button type="button" style={{ marginLeft: '10vw' }} onClick={this.testOrder}>Test Order</Button> */}
        </Form.Item>
      </this.Form >
    );
  }
}