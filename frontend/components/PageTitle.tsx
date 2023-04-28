import React from 'react';

interface Props {
  title: string;
}

const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <h1 className="text-3xl font-bold text-center bg-white fixed top-0 left-0 right-0 z-50 p-4 shadow-md" style={{ marginBottom: '80px', color:"black" }}>
      {title}
      <span style={{ color:"orange" }}> | Encontré Trabajo</span>
    </h1>
  );
};

export default PageTitle;
