const mongoose = require('mongoose');
const dotenv =  require('dotenv');
const app = require('./app');

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace(
  '<PASSWORD>', 
  process.env.DATABASE_PASSWORD
  );

mongoose
.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() =>
    console.log('DB Connection Successful'));

  const tourSchema = new mongoose.Schema({
    name: {
      type: 'string',
      required: true,
    },
    rating: Number,
    price: {
      type: 'number',
      required: true
    }
  });

//SERVER
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("App running on port ${port}.... ");
});