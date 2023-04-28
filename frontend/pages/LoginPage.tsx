import Layout from '@/components/Layout';
import React from 'react';
import Login from '../components/Login';

const LoginPage: React.FC = () => {
  return (
    <Layout title="Inicio de sesión">
      <Login />
    </Layout>
  );
};

export default LoginPage;
