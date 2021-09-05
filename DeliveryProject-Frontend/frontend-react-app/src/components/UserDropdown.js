import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default class UserDropdown extends React.Component {
  render() {
    return (
      <Link to="/profile">
        <Button shape="round">
          Profile
        </Button>
      </Link>
    )
  }
}