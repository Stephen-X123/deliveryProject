import { Button, Form, Input, message, Modal } from 'antd';
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { register } from './Utils';

class Register extends React.Component {
  //Please refer to Login.js comments
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
      loading: true
    });
    register(data)
      .then(() => {
        this.setState({
          displayModal: false,
        })
        message.success(`Successfully signed up`);
      }).catch((err) => {
        message.error(err.message);
      })
      .finally(() => {
        this.setState({
          loading: false
        });
      });
  }

  render() {
    return (
      <>
        <Button shape="round" onClick={this.onClick}>
          Sign Up
        </Button>
        <Modal title="Sign Up" visible={this.state.displayModal} onCancel={this.handleCancel} footer= {null}>
<Form
    name="normal_signup"
    onFinish={this.onFinish}
    preserve={false}
  >
    <Form.Item
      name="firstName"
      rules={[{ required: true, message: 'Please input your first name!' }]}
    >
      <Input  placeholder="First Name" />
    </Form.Item>
    <Form.Item
      name="lastName"
      rules={[{ required: true, message: 'Please input your last name!' }]}
    >
      <Input placeholder="Last Name" />
    </Form.Item>
    <Form.Item
      name="email"
      rules={[{ required: true, message: 'Please input your Email!' }]}
    >
      <Input placeholder="Email" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please input your Password!' }]}
    >
      <Input.Password placeholder="Password"/>
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

export default Register;