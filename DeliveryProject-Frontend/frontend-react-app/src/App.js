import './App.css';
import { Layout, Row, Col } from 'antd';
import Login from './components/Login.js'
import Register from './components/Register.js'
import { useState } from 'react';
const { Header, Content } = Layout

function App() {
  const [hasLogged, setHasLogged] = useState(false);
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
            {!hasLogged && <Login onSuccess={() => setHasLogged(true)}/>}
            {!hasLogged && <Register />}  
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