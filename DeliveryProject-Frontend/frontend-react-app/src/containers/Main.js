import { Layout, Row, Col } from 'antd';
const { Content } = Layout

export default function Main() {
  return (
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

  );
}