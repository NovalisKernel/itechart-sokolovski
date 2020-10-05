import dotenv from 'dotenv';

const DOT_ENV_FILE = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env.local';

dotenv.config({ path: DOT_ENV_FILE });

export default {
  app: {
    environment: process.env.NODE_ENV,
    port: process.env.APP_PORT,
    clientUri: process.env.CLIENT_URI
  }
};
