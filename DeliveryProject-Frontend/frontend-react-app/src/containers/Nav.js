import { Layout, Row, Col, Button } from 'antd';
import Login from '../components/Login';
import Register from '../components/Register';
import OrderButton from '../components/OrderButton'
import TestContainer from './TestContainer';
import UserDropdown from '../components/UserDropdown'
import { Link } from "react-router-dom";
import React, { useState, Content } from 'react';
import '../css/Nav.css'

const { Header } = Layout


export default class Nav extends React.Component {
    /*
        Possible states for page:
        "main" => main page
        "order" => order page (makingg orders)
        "orderHistory" => order history
        "tracking" => tracking one order
        "profile" => user profile page
    */

    state = {
        isLoggedIn: false,
        page: "main"
    }

    flipLogin = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
        this.setPage("main")
    }

    setPage = (newPage) => {
        this.setState({
            page: newPage,
        })
    }

    render() {
        const { isLoggedIn, page } = this.state;
        return (
            <Header className="header" >
                <Row justify="space-between">
                    <Col>
                        <Link to="/">
                            <h2 className="company-name">
                                Owly
                            </h2>
                        </Link>

                    </Col>
                    <Col>
                        {!isLoggedIn && <Login onSuccess={this.flipLogin} />}
                        {!isLoggedIn && <Register />}
                        {isLoggedIn &&
                            <Row>
                                <UserDropdown username="Johnson" logout={this.flipLogin} />
                                {(page !== "orderHistory") && <OrderButton setOrderHistory={this.setPage} />}
                                {(page === "orderHistory") &&
                                    <Link to="/">
                                        <Button onClick={this.flipLogin} className="signOutInlineButton" shape="round">
                                            Sign Out
                                        </Button>
                                    </Link>
                                }
                            </Row>
                        }
                    </Col>
                </Row>
            </Header >);
    }
}
