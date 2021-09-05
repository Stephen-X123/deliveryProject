import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default class OrderButton extends React.Component {
  //background color -> '#08142c' would be ok if you want to chagne orders button.
  //However, the outline is still white, which makes it ugly anyways

  render() {
    return (
      <Link to="/orderhistory">
        <Button shape="round" className="orderbutton">
          Orders
        </Button >
      </Link >
    )
  }
}