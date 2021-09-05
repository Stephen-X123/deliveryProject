import { Layout, Row, Col } from 'antd';
import Login from '../components/Login';
import Register from '../components/Register';
import OrderButton from '../components/OrderButton'
import TestContainer from './TestContainer';
import UserDropdown from '../components/UserDropdown'
import { Link } from "react-router-dom";
import { useState, Content } from 'react';
import '../css/Nav.css'

const { Header } = Layout


export default function Nav() {
    const [hasLogged, setHasLogged] = useState(false);
    return (
        <Header className="header">
            <Row justify="space-between">
                <Col>
                    <Link to="/">
                        <h2 className="company-name">
                            Owly
                        </h2>
                    </Link>

                </Col>
                <Col>
                    <TestContainer />
                    {!hasLogged && <Login onSuccess={() => setHasLogged(true)} />}
                    {!hasLogged && <Register />}
                    {hasLogged && <OrderButton />}
                    {hasLogged && <UserDropdown />}
                </Col>
            </Row>
        </Header>)
}
