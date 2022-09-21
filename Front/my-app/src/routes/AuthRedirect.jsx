import React from 'react';
import { useHistory } from "react-router-dom";

const AuthRedirect = () => {
  const isAuthenticated = true;
  const history = useHistory();

  if (isAuthenticated) {
    history.push('/');
  } else {
    history.push('/login');
  }
};

export default AuthRedirect;
