import React from 'react';
import SpinnerWithAnimation from '../../components/atoms/SpinnerWithAnimation';

import { Container, Title } from './styles';

const loadingAnimation = require('../../../assets/animations/splash/loading.json');

const SplashScreen: React.FC<any> = () => {
  return (
    <Container>
      <Title style={{ marginBottom: 10, fontWeight: 'bold', fontSize: 15 }}>
        Carregando
      </Title>
      <SpinnerWithAnimation source={loadingAnimation} width={200} />
    </Container>
  );
};

export default SplashScreen;
