import Link from 'next/link';
import React from 'react';

import GoogleIcon from '../public/images/google-icon.png';
import EthereumIcon from '../public/images/ethereum-icon.png';
console.log("GoogleIcon",GoogleIcon)

const Register: React.FC = () => {
  const handleGoogleSignup = () => {
    // Lógica para iniciar sesión con Google aquí
  };

  const handleEthereumSignup = () => {
    // Lógica para iniciar sesión con Ethereum aquí
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-10 rounded-lg shadow-lg" style={{"width":"500px"}}>
        <h2 className="text-2xl font-bold mb-6">Registro</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingresa tu nombre"
            className="border border-gray-400 p-2 px-3 w-full rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            className="border border-gray-400 p-2 px-3 w-full rounded-lg"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            className="border border-gray-400 p-2 px-3 w-full rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <button onClick={handleGoogleSignup} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            <img src={GoogleIcon.src} alt="Google Icon" className="w-5 h-5 mr-2 inline-block" />
            Registrarse con Google
          </button>
          <button onClick={handleEthereumSignup} className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
            <img src={EthereumIcon.src} alt="Ethereum Icon" className="w-5 h-5 mr-2 inline-block" />
            Registrarse con Ethereum
          </button>
          <Link href="/LoginPage">
            <div className="text-blue-500 font-bold">Inicio de Sesión</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
