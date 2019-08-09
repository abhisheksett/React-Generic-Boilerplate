import React from 'react';
import './Login.scss';
import { navigate } from '@reach/router';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Textbox from '../../components/Textbox/Textbox';
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';
import makeApiRequest from '../../services/network';
import apiConfigs from '../../config/api-config';

function Login() {
  const { t } = useTranslation();
  const handleSubmit = async () => {
    try {
      await makeApiRequest({
        method: 'post',
        url: apiConfigs.login.auth,
        data: {}
      });
      navigate('/dashboard');
    } catch (e) {
      // error handling goes here
    }
  };
  return (
    <Container className="login">
      <Row>
        <Col sm={1} xs={1} md={3} lg={3}></Col>
        <Col sm={10} xs={10} md={6} lg={6}>
          <Label size="medium">{t('login.username')}</Label>
          <Textbox />
          <br />
          <br />
          <br />
          <Label size="medium">{t('login.password')}</Label>
          <Textbox type="password" />
          <br />
          <br />
          <br />
          <Button handleClick={handleSubmit}>{t('login.submit')}</Button>
        </Col>
        <Col sm={1} xs={1} md={3} lg={3}></Col>
      </Row>
    </Container>
  );
}

export default Login;
