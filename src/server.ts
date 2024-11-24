import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    console.log('Connecting to the database...');
    await mongoose.connect(config.database_url as string);
    console.log('Database connected successfully.');

    console.log(`Starting server on port ${config.port}...`);
    app.listen(config.port, () => {
      console.log(`Server is running on http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

main();
