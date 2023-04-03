const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/product');

const app = express();
const port = 80;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://mongodb:passpass@cluster0.bd9ne7k.mongodb.net/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// mongoose.connect('mongodb://localhost:27017/myDatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('MongoDB connected successfully');
});

app.use('/api',router)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
