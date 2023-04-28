import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

interface ExtendedConnectOptions extends ConnectOptions {
  useUnifiedTopology: boolean;
}

class Database {
  public static connect(): void {
    const uri = process.env.MONGO_URI as string;
    
    mongoose.connect(uri)
      .then(() => {
        console.log('Database connected');
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default Database;
