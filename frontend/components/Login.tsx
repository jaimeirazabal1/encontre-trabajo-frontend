import React from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-10 rounded-lg shadow-lg" style={{ width: '500px' }}>
        <h2 className="text-2xl font-bold mb-6">Inicio de sesión</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            className="border border-gray-400 p-2 w-full rounded-lg"
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
            className="border border-gray-400 p-2 w-full rounded-lg"
          />
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            Iniciar sesión
          </button>
          <Link href="/RegisterPage">
            <div className="text-blue-500 font-bold">Registrarse</div>
            </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
