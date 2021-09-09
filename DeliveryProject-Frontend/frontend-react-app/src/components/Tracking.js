import React from "react";
import '../css/Tracking.css'
import { Content } from 'react';
import data from "../constants/tracking.json";
import helpers from "../helpers/trackingHelpers";
import { List, Typography } from "antd";
export default class Tracking extends React.Component {

  renderStatus = () => {

  }

  renderHistory = (data) => {
    const historys = helpers.historyTracker(data);
    return <List
        bordered
        dataSource={historys}
        renderItem={item => (
          <List.Item>
            {item}
          </List.Item>
        )}
      />
  }

  renderShippingInfo = () => {

  }

  render() {
    const { renderHistory } = this;
    return (
      <div className="tracking-background">
        <h1 className="tracking-title">
          Track package
        </h1>
        <div>
          {renderHistory(data)}
        </div>
      </div>
    );
  }
}
