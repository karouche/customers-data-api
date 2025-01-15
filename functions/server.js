const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const USERS_FILE_PATH = process.env.USERS_FILE_PATH || path.join(__dirname, '../data/users.json');
const PRODUCTS_FILE_PATH = process.env.PRODUCTS_FILE_PATH || path.join(__dirname, '../data/products.json');

app.get('/users', (req, res) => {
  fs.readFile(USERS_FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading users data:', err);
       res.status(500).send(`Error reading users data from ${USERS_FILE_PATH}`);
      return;
    }
    try {
      const users = JSON.parse(data);
      res.send(users);
    } catch (parseErr) {
      console.error('Error parsing users data:', parseErr);
      res.status(500).send('Error parsing users data');
    }
  });
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  fs.readFile(USERS_FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading users data:', err);
      res.status(500).send('Error reading users data');
      return;
    }
    try {
      const users = JSON.parse(data);
      const user = users.find(u => u.id === userId);
      if (!user) {
        res.status(404).send('User not found');
        return;
      }
      res.send(user);
    } catch (parseErr) {
      console.error('Error parsing users data:', parseErr);
      res.status(500).send('Error parsing users data');
    }
  });
});

app.get('/products', (req, res) => {
  fs.readFile(PRODUCTS_FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading products data:', err);
      res.status(500).send('Error reading products data');
      return;
    }
    try {
      const products = JSON.parse(data);
      res.send(products);
    } catch (parseErr) {
      console.error('Error parsing products data:', parseErr);
      res.status(500).send('Error parsing products data');
    }
  });
});

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  fs.readFile(PRODUCTS_FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading products data:', err);
      res.status(500).send('Error reading products data');
      return;
    }
    try {
      const products = JSON.parse(data);
      const product = products.find(p => p.id === productId);
      if (!product) {
        res.status(404).send('Product not found');
        return;
      }
      res.send(product);
    } catch (parseErr) {
      console.error('Error parsing products data:', parseErr);
      res.status(500).send('Error parsing products data');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports.handler = serverless(app);
