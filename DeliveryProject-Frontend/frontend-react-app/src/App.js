import './App.css';
import { Layout, Row, Col } from 'antd';
import Login from './components/Login.js'
import Register from './components/Register.js'
const { Header, Content } = Layout

function App() {
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "black" }}>
          <Row justify="space-between">
            <Col>
              <h2 className="company-name">
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

            <Row justify="left">
              <Col>
                <h2 className="title-text">Ship, manage, track, deliver</h2>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;