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

export const SHIPPING_IMAGES = {
    SUBMITTED: {
       green: "submitted - green",
       grey: "submitted - grey"
    },
    PICKED_UP: {
        green: "picked up - green",
        grey: "picked up - grey"
    },
    SHIPPED: {
        green: "shipped - green",
        grey: "shipped - grey"
    },
    DELIVERED: {
        green: "delivered - green",
        grey: "delivered - grey"
    },
    DONE: {
        green: "completed - green",
        grey: "completed - grey"
    }
}

