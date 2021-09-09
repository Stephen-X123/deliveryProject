import React from "react";
import '../css/Tracking.css'
import { ReactComponent as OrderIcon } from '../icons/OrderIcon.svg';
import { ReactComponent as ShipIcon } from '../icons/ShipIcon.svg';
import { ReactComponent as DeliverIcon } from '../icons/DeliverIcon.svg';
import data from "../constants/tracking.json";
import helpers from "../helpers/trackingHelpers";
import { Row, Col, List, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons"
import { SHIPPING_STATUS_INDEX } from "../constants/trackingConstants";

export default class Tracking extends React.Component {

  renderStatus = (data) => {
    const {shipmentStatus} = data;
    const steps = SHIPPING_STATUS_INDEX[shipmentStatus];
    let orderIconColor = "limegreen";
    let shipIconColor = "lightgray";
    let deliverIconColor = "lightgray";
    if(steps<2) { 
    } else if(steps==2){
      shipIconColor = "limegreen";
    } else {
      shipIconColor = "limegreen";
      deliverIconColor = "limegreen";
    }
    
    return (
      <>
        <div className="tracking-background">
          <h1 className="tracking-title">
            Track package
          </h1>
        </div>
        <div className="tracking-graph">
          <div className="tracking-progress-icons">
            <OrderIcon className="tracking-order-icon" fill={orderIconColor} width='100' height='100' />
            <ArrowRightOutlined style={{ fontSize: 50, color: orderIconColor }} />
            <ShipIcon className="tracking-ship-icon" fill={shipIconColor} width='100' height='100' />
            <ArrowRightOutlined style={{ fontSize: 50, color: shipIconColor }} />
            <DeliverIcon className="tracking-deliver-icon" fill={deliverIconColor} width='100' height='100' />
          </div>
          <div className="tracking-progress-text">
            <b style={{ color: {orderIconColor} }}>Ordered</b>
            <b style={{ color: {shipIconColor} }}>Shipped</b>
            <b style={{ color: {deliverIconColor} }}>Delivered</b>
          </div>
        </div>
      </>
    )
  }

  renderHistory = (data) => {
    const historys = helpers.historyTracker(data);
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
    return (
      <>
        <div>
          {renderStatus(data)}
        </div>
        <Row>
          <Col span={16}>
            {renderHistory(data)}
          </Col>
          <Col span={8}>
            {renderShippingInfo()}
          </Col>
        </Row>
      </>
    );
  }
}
