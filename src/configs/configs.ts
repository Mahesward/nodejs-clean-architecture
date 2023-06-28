export default {
  port: process.env.PORT || 8080,
  mongoDB: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/post-clean-code',
  },
};
