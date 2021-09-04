import { Layout, Row, Col } from 'antd';
import Login from '../components/login';
import Register from '../components/Register';
import { Link } from "react-router-dom";
import TestContainer from './TestContainer';
const { Header } = Layout


export default function Nav(){
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
                <Login />
                <Register />
            </Col>
        </Row>
    </Header>)
}
