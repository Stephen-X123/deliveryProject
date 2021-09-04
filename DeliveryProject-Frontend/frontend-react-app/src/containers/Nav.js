import { Layout, Row, Col } from 'antd';
import Login from '../components/Login';
import Register from '../components/Register';
import { Link } from "react-router-dom";
import TestContainer from './TestContainer';
import { useState, Content } from 'react';

const { Header } = Layout


export default function Nav(){
    const [hasLogged, setHasLogged] = useState(false);
  return (
    <Header style={{ backgroundColor: "black" }}>
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
                {!hasLogged && <Login onSuccess={() => setHasLogged(true)}/>}
                {!hasLogged && <Register />}
            </Col>
        </Row>
    </Header>)
}
