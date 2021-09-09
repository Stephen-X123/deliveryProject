import React from "react";
import {
    SHIPPING_STATUS_INDEX,
    INVERTED_SHIPPING_STATUS_INDEX,
    SHIPPING_STATUS_TIME,
    SHIPPING_STATUS,
    SHIPPING_IMAGES
} from "../constants/trackingConstants";

import _ from "lodash";
import moment from "moment";
import { Col, Row } from "antd";


const trackerHelper = ({ item, index, order, color}) => {
    const Comp = item;
    const status = INVERTED_SHIPPING_STATUS_INDEX[index];
    const message = SHIPPING_STATUS[status];
    const timeField = SHIPPING_STATUS_TIME[status];
    const image = SHIPPING_IMAGES[status][color];
    const time = moment.unix(_.get(order, `${timeField}`)).format('YYYY-MM-DD HH:mm:ss');
    return <Comp time={time} message={message} image={image}/>
}

const statusItem = ({time, message, image}) => {
    return <Col span={4}>
            <Row>{image}</Row>
            <Row>{time}</Row>
            <Row>{message}</Row>
        </Col>
}

const statusTracker = ({ shipmentStatus }) => {
    const status = [];
    const steps = SHIPPING_STATUS_INDEX[shipmentStatus];
    const totalStatusLen = Object.keys(SHIPPING_STATUS).length;

    // reached
    for(let i = 0; i <= steps; i++){
       const item = trackerHelper({item: statusItem, index: i, color: "green"})
       status.push(item);
    }

    // unreached
    for(let i = steps+1; i < totalStatusLen; i++){
        const item = trackerHelper({item: statusItem, index: i, color: "grey"})
        status.push(item);
    }

    return status;
}


const historyItem = ({time, message}) => {
    return <div>
                <div>{time}</div>
                <div>Your package has been {message}</div>
            </div>
}


const historyTracker = ({shipmentStatus, order}) => {
    const historys = [];
    const steps = SHIPPING_STATUS_INDEX[shipmentStatus];
    for(let i = steps; i >= 0; i--){
       const item = trackerHelper({item: historyItem, index: i, order})
       historys.push(item);
    }
    return historys;
}


export default {
    trackerHelper,
    historyTracker,
    historyItem,
    statusTracker,
    statusItem
}

