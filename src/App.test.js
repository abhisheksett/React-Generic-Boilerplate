import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import apiConfigs from './config/api-config';
import appConfigJson from '../server/mocks/app_config/get.json';
import { setAppConfig } from './utils/app-setup';
import makeApiRequest from './services/network';

beforeAll(async () => {
  const appConfig = await makeApiRequest({
    method: 'get',
    url: apiConfigs.common.app_config,
    fileResponse: appConfigJson
  });
  setAppConfig(appConfig);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
