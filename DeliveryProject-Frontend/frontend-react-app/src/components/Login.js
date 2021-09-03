import { Button, Form, Input, message, Modal } from 'antd';
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { login } from "./Utils";

class Login extends React.Component {
  state = {
    displayModal: false,
    loading: false
  }
 
  handleCancel = () => {
    this.setState({
      displayModal: false,
    })
  }

  onClick = () => {
    //TODO: request backend, in utils.js.
    //If backend works proceed.
    this.setState({
      displayModal: true,
    })
  }

  onFinish = (data) => {
    this.setState({
      loading: true,
    });
    login(data)
      .then(() => {
        message.success(`Login Successful`);
        this.setState({
          displayModal: false,
        })
        this.props.onSuccess();
      })
      .catch((err) => {
        message.error(err.message);
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    return (
      <>
        <Button
          shape="round"
          onClick={this.onClick}
          style={{ marginRight: '20px' }}
        >
          Sign In
        </Button>
        <Modal 
          title="Sign In"
          visible={this.state.displayModal} 
          onCancel={this.handleCancel} 
          footer= {null}>
        <Form
            name="normal_login"
            onFinish={this.onFinish}
            preserve={false}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
              
            </Form.Item>
 
            <Form.Item>
              <Button type="primary" htmlType="submit" loading = {this.state.loading}>
                Submit</Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    )
  }
}

export default Login;