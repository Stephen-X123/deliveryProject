import React from 'react'
import { Button, Menu, Row } from 'antd'
import { Link } from 'react-router-dom'
import '../css/UserDropDown.css'
const { SubMenu } = Menu
export default class UserDropdown extends React.Component {

  greeting = `Welcome back, ${this.props.username}`

  render() {
    return (
      <>
        {
          <span style={{ whiteSpace: 'nowrap', marginRight: '20px' }}>
            <Menu mode="horizontal" className="menu" theme="white">
              <SubMenu title={this.greeting}>
                <Menu.Item>
                  <Link to="/profile">
                    Edit Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/orderhistory">
                    Orders
                  </Link>
                </Menu.Item>
                <Link to="/">
                  <Menu.Item onClick={this.props.logout}>
                    Sign out
                  </Menu.Item>
                </Link>
              </SubMenu>
            </Menu >
          </span>
        }
      </>
    )
  }
}