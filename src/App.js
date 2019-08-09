import React from 'react';
import { Link } from '@reach/router';
import { useTranslation } from 'react-i18next';
import Routes from './routes/routes';
import { getAppConfig } from './utils/app-setup';
import './App.scss';

function App() {
  const { t } = useTranslation();
  const theme = getAppConfig()['web']['1.0']['general']['theme'];
  return (
    <React.StrictMode>
      <div className={`${theme} app`}>
        <header>
          <Link to="/">{t('title')}</Link>
        </header>
        <Routes />
      </div>
    </React.StrictMode>
  );
}

export default App;
