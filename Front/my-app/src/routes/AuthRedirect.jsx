import React from 'react';
import { useLRAuth } from "loginradius-react";
import { Redirect } from "react-router-dom";
import LoadingRadius from "components/LoadingRadius";
import { StyledLoadingContent } from './styles';

const AuthRedirect = () => {
  const { isAuthenticated } = true;
  const isLoading = true;

  if (isLoading) {
    return (
    <StyledLoadingContent>
      <LoadingRadius/>
    </StyledLoadingContent>
    )
  } else if (isAuthenticated) {
    return <Redirect to={"/dashboard/relatorios"} />;
  } else {
    return <Redirect to={"/home"} />;
  }
};

export default AuthRedirect;
