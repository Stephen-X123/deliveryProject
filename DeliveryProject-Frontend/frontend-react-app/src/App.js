
import logo from './logo.svg';
import './App.css';
import { Layout, Row, Col } from 'antd';
import Login from './components/Login.js'
import Register from './components/Register.js'
import Drone from './backgrounds/Drone.png'
const { Header, Content } = Layout

function App() {
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "black" }}>
          <Row justify="space-between">
            <Col>
              <h2 style={{ color: "white" }}>
                Owly
              </h2>
            </Col>
            <Col>
              <Login />
              <Register />
            </Col>
          </Row>
        </Header>
        <Layout>
          <Content
            className="content-background"
            style={{
              padding: 24,
              margin: 0,
              height: 1000,
            }}
          >
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;