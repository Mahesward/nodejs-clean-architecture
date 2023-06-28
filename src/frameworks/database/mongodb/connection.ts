import { Mongoose } from 'mongoose';
const connection = (mongoose: Mongoose, configs) => {
  try {
    mongoose.connect(configs.mongoDB.uri);
    console.log('db connected successfully');
  } catch (error) {
    console.log(error);
  }

  mongoose.connection.on('connected', () => {
    console.info('Connected to MongoDB!');
  });

  mongoose.connection.on('reconnected', () => {
    console.info('MongoDB reconnected!');
  });

  mongoose.connection.on('error', (error) => {
    console.error(`Error in MongoDb connection: ${error}`);
    mongoose.disconnect();
  });
};

export default connection;
