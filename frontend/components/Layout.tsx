import React from 'react';
import Head from 'next/head';
import PageTitle from './PageTitle';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title}`}</title>
      </Head>
      <PageTitle title={`${title}`} />
      {children}
    </>
  );
};

export default Layout;
