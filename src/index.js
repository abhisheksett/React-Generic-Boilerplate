import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initI18n } from './i18n/i18n';
import makeApiRequest from './services/network';
import { setAppConfig } from './utils/app-setup';
import apiConfigs from './config/api-config';

const init = async () => {
  try {
    const appConfig = await makeApiRequest({
      method: 'get',
      url: apiConfigs.common.app_config
    });
    setAppConfig(appConfig);
    initI18n(appConfig.language);
    ReactDOM.render(
      <Suspense fallback="Loading">
        <App />
      </Suspense>,

      document.getElementById('root')
    );
  } catch (e) {
    // error goes here
  }
};

init();
