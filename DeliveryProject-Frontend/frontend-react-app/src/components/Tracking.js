import React from "react";
import '../css/Tracking.css'
import data from "../constants/tracking.json";
import helpers from "../helpers/trackingHelpers";
import { List, Row, Col } from "antd";
import { VEHICLES_TYPE } from "../constants/vehicles";
import { SHIPPING_STATUS } from "../constants/trackingConstants";
import _ from "lodash";
export default class Tracking extends React.Component {

  renderStatus = (data) => {
    const statuses = helpers.statusTracker(data);
    return statuses
  }

  renderHistory = (data) => {
    const historys = helpers.historyTracker(data);
    return <Col span={18}>
            <List
                bordered
                dataSource={historys}
                renderItem={item => (
                  <List.Item>
                    {item}
                  </List.Item>
                )}
              />
    </Col>
  }

  renderShippingInfo = (data) => {
    const { shipmentStatus , vehicle } = data;
    const { vehicleType } = vehicle;
    return <div className="shipping-information">
      <div className="t-title"> Shipment Information</div>
        <div className="t-method">Shipment Method: {VEHICLES_TYPE[vehicleType]}</div>
        <div className="t-status">Shipment Status: {_.capitalize(SHIPPING_STATUS[shipmentStatus])}</div>
    </div>
  }

  render() {
    const { renderHistory, renderStatus, renderShippingInfo  } = this;
    return (
      <div className="tracking-background">
        <h1 className="tracking-title">
          Track package
        </h1>
        <div className="tracking-content">
            <Row className="tracking-status">
              {renderStatus(data)}
            </Row>
            <Row className="tracking-history">
              {renderHistory(data)}
              {renderShippingInfo(data)}
            </Row>
        </div>
      </div>
    );
  }
}
