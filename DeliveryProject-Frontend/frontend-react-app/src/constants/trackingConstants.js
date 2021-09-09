import React from "react";
import _ from "lodash";

export const SHIPPING_STATUS_INDEX = {
    SUBMITTED: 0,
    PICKED_UP: 1,
    SHIPPED:   2,
    DELIVERED: 3,
    DONE:      4
}

export const INVERTED_SHIPPING_STATUS_INDEX = _.invert(SHIPPING_STATUS_INDEX);

export const SHIPPING_STATUS_TIME = {
    SUBMITTED: "createTime",
    PICKED_UP: "actualPickUpTime",
    SHIPPED: "shippingTime",
    DELIVERED: "deliveryTime",
    DONE: "completeTime"
}

export const SHIPPING_STATUS = {
    SUBMITTED: "submitted",
    PICKED_UP: "picked up",
    SHIPPED: "shipped",
    DELIVERED: "delivered",
    DONE: "completed"
}