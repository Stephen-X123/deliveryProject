import { Button } from 'antd';
import React from 'react';

import { Link } from "react-router-dom";
class TestContainer extends React.Component {


  render() {
    return (
      <Link to="/test">
        <Button
          shape="round"
          style={{ marginRight: '0px' }}
        >
          Test Router
        </Button>
      </Link>
    )
  }
}

export default TestContainer;