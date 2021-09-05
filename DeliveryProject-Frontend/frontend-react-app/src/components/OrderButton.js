import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default class OrderButton extends React.Component {
  render() {
    return (
      <Link to="/orderhistory">
        <Button shape="round" className="orderbutton" style={{ marginRight: '20px' }}>
          Orders
        </Button>
      </Link>
    )
  }

}