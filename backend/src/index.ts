import app from './app';
import Database from './database';

const PORT = process.env.PORT || 3000;

Database.connect();

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});