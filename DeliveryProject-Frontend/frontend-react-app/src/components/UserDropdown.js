import React from 'react'
import { getUser } from './Utils'
import { Spin, Button, Menu, message, Row } from 'antd'
import { Link } from 'react-router-dom'
import '../css/UserDropDown.css'
const { SubMenu } = Menu
export default class UserDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }

  getUsername = () => {
    getUser().then(
      (user) => {
        var name = user.firstName + " " + user.lastName;
        this.setState({
          username: name,
        })
      }
    ).catch(
      (err) => {
        message.error(err.message)
      }
    );
  }

  componentDidMount() {
    this.getUsername();
  }

  renderloading = () => {
    return <Spin tip="Loading..." className="order-history-loading" />
  }

  render() {
    const { username } = this.state;
    if (username == null) {
      return this.renderloading();
    }
    var greeting = `Welcome back, ${username}`
    return (
      <>
        {
          <span style={{ marginRight: '2vw', width: '12vw' }}>
            <Menu mode="horizontal" className="menu" theme="dark" >
              <SubMenu title={greeting} style={{ width: '8vw' }}>
                {/* <Menu.Item>
                  <Link to="/profile">
                    Edit Profile
                  </Link>
                </Menu.Item> */}
                <Menu.Item>
                  <Link to={{
                    pathname: '/orderhistory'
                  }}>
                    Orders
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/">
                    Main Page
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