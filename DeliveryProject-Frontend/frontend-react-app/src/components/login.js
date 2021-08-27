import { Button } from 'antd';
import React from 'react';

class Login extends React.Component {

  onClick = () => {
    //TODO: request backend, in utils.js.
    //If backend works proceed.
  }

  render() {
    return (
      <>
        <Button
          shape="round"
          onClick={this.onClick}
          style={{ marginRight: '20px' }}
        >
          Sign in
        </Button>
      </>
    )
  }
}

export default Login;