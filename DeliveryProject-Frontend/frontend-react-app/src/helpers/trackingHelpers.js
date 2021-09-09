import React from "react";
import {
    SHIPPING_STATUS_INDEX,
    INVERTED_SHIPPING_STATUS_INDEX,
    SHIPPING_STATUS_TIME,
    SHIPPING_STATUS
} from "../constants/trackingConstants";

import _ from "lodash";
import moment from "moment";

// private int orderId;
// private int userID;
// private String recipientName;
// private String fromAddress;
// private String toAddress;
// private Timestamp actualPickUpTime;
// private Timestamp createTime;
// private Timestamp departTime;
// private Timestamp desiredPickedUpTime;
// private Timestamp deliveryTime;
// private double totalCost;
// private String paymentStatus;
// private String Review;
// private String orderStatus;

const trackerHelper = ({ item, index, order}) => {
    const Comp = item;
    const status = INVERTED_SHIPPING_STATUS_INDEX[index];
    const message = SHIPPING_STATUS[status];
    const timeField = SHIPPING_STATUS_TIME[status];
    const time = moment.unix(_.get(order, `${timeField}`)).format('YYYY-MM-DD HH:mm:ss');
    return <Comp time={time} message={message}/>
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
    for(let i = 0; i <= steps; i++){
       const item = trackerHelper({item: historyItem, index: i, order})
       historys.push(item);
    }
    return historys;
}


export default {
    trackerHelper,
    historyTracker,
    historyItem
}

