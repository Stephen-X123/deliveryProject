import React from "react";
import '../css/Tracking.css'
import { ReactComponent as OrderIcon } from '../icons/OrderIcon.svg';
import { ReactComponent as ShipIcon } from '../icons/ShipIcon.svg';
import { ReactComponent as DeliverIcon } from '../icons/DeliverIcon.svg';
// import data from "../constants/tracking.json";
import { Link } from "react-router-dom";
import helpers from "../helpers/trackingHelpers";
import { Button, Row, Col, List, Spin, message } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons"
import { SHIPPING_STATUS_INDEX } from "../constants/trackingConstants";
import { getTracking } from "./Utils";
import sorryImage from '../dejavu/sorryImage.jpeg';

export default class Tracking extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null, 
      errorFlag: false
    }
  }

  componentDidMount() {
    this.updateState();
  }

  updateState = () => {
    getTracking(this.props.orderId).then(
      (response) => {
        console.log('response', response);
        response.order.createTime /= 1000;
        response.order.actualPickUpTime /= 1000;
        response.order.deliveryTime /= 1000;
        this.setState({
          data: response
        });
        const oldData = this.state.data;
        this.setState({
          data: oldData,
        });
        const { setOrderId } = this.props;
        setOrderId(null);
      }
    ).catch(
      (err) => {
        // message.error(err.message);
        console.error(err);
        this.setState({
          errorFlag: true
        });
      }
    )
  }

  renderloading = () => {
    return <Spin tip="Loading..." className="tracking-loading" />
  }

  renderStatus = (data) => {
    const { shipmentStatus, order } = data;
    const { orderId } = order;
    const steps = SHIPPING_STATUS_INDEX[shipmentStatus];
    let orderIconColor = "limegreen";
    let shipIconColor = "lightgray";
    let deliverIconColor = "lightgray";
    if (steps < 2) {
    } else if (steps == 2) {
      shipIconColor = "limegreen";
    } else {
      shipIconColor = "limegreen";
      deliverIconColor = "limegreen";
    }

    return (
      <>
        <div className="tracking-background">
          <h1 className="tracking-title">
            Track package #{orderId}
          </h1>
        </div>
        <div className="tracking-graph">
          <div className="tracking-progress-icons">
            <OrderIcon className="tracking-order-icon" fill={orderIconColor} width='100' height='100' />
            <ArrowRightOutlined style={{ fontSize: 25, color: orderIconColor }} />
            <ArrowRightOutlined style={{ fontSize: 25, color: orderIconColor }} />
            <ArrowRightOutlined style={{ fontSize: 25, color: orderIconColor }} />
            <ArrowRightOutlined style={{ fontSize: 25, color: orderIconColor }} />
            <ShipIcon className="tracking-ship-icon" fill={shipIconColor} width='100' height='100' />
            <ArrowRightOutlined style={{ fontSize: 25, color: shipIconColor }} />
            <ArrowRightOutlined style={{ fontSize: 25, color: shipIconColor }} />
            <ArrowRightOutlined style={{ fontSize: 25, color: shipIconColor }} />
            <ArrowRightOutlined style={{ fontSize: 25, color: shipIconColor }} />
            <DeliverIcon className="tracking-deliver-icon" fill={deliverIconColor} width='100' height='100' />
          </div>
          <div className="tracking-progress-text">
            <b style={{ color: { orderIconColor } }}>Ordered</b>
            <b style={{ color: { shipIconColor } }}>Shipped</b>
            <b style={{ color: { deliverIconColor } }}>Delivered</b>
          </div>
        </div>
      </>
    )
  }

  renderHistory = (data) => {
    const historys = helpers.historyTracker(data);
    // console.log('historys', historys);
    // console.log('data', data);
    return (
      <div className="tracking-history">
        <h2>Tracking History</h2>
        <List
          dataSource={historys}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>)
  }

  renderShippingInfo = () => {
    return (
      <div className="tracking-history">
        <h2>Shipment Info</h2>
      </div>)
  }

  render() {
    const { renderStatus, renderHistory, renderShippingInfo } = this;
    const { data, errorFlag } = this.state;
    if (data === null && errorFlag === false) {
      return this.renderloading()
    } else if (errorFlag === true) {
      console.log('wrong order number')
      return (
        <>
        <img className="wrong-tracking-img" src={sorryImage} alt="Sorry, order not found" width="400" height="400" />
        <div style={{textAlign: "center", fontSize: "2em"}}>Order not found. Please go back to home page and re-enter the order number.</div>
          <Link to="/" style={{position: 'absolute', left: '46%'}}>
            <Button>Home page</Button>
          </Link>
        </>
      );
    }
    return (
      <>
        <div>
          {renderStatus(this.state.data)}
        </div>
        <Row>
          <Col span={16}>
            {renderHistory(this.state.data)}
          </Col>
          <Col span={8}>
            {renderShippingInfo()}
          </Col>
        </Row>
        <Link to="/" style={{position: 'absolute', left: '46%'}}>
            <Button>Home page</Button>
          </Link>
      </>
    );
  }
}
