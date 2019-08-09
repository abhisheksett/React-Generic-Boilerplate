import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import { element } from 'prop-types';
import { useTranslation } from 'react-i18next';
import makeApiRequest from '../services/network';
import constants from '../config/constants';
import apiConfig from '../config/api-config';
import { AuthContext } from '../contexts/AuthContext';

function ProtectedRoute({ component: Component, fallbackNavigate, ...rest }) {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { t } = useTranslation();
  if (isAuthenticated) {
    return <Component {...rest} />;
  } else {
    makeApiRequest({
      method: constants.METHOD_GET,
      url: apiConfig.common.user_authenticated
    })
      .then(res => {
        if (res.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          return navigate(fallbackNavigate);
        }
      })
      .catch(() => {
        setIsAuthenticated(false);
        return navigate(fallbackNavigate);
      });
    return <div>{t('common.loading')}</div>;
  }
}

ProtectedRoute.prototypes = {
  component: element.isRequired
};

export default ProtectedRoute;
