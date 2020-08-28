import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Navigation = ({ history, ...props }) => {
  console.log('all props', props);
  const handleOnClick = () => {
    history.push('/login');
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOnClick}>
        Login Page
      </Button>
    </div>
  );
};

export default withRouter(Navigation);
