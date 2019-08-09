import React from 'react';
import './Dashboard.scss';
import { useTranslation } from 'react-i18next';

function Dashboard() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="row">{t('dashboard.welcome')}</div>
    </div>
  );
}

export default Dashboard;
