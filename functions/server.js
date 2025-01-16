const express = require('express');
const serverless = require('serverless-http');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Données intégrées directement dans le code
const users = require("./data/users.json");
const products = require("./data/products.json");

app.get("/users", (req, res) => {
  const userId = req.query.id;  
  if (userId) {
    const user = users.find((u) => u.id === parseInt(userId));
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    res.send(user);
    return;
  }
  res.send(users);
});
 

app.get("/products", (req, res) => {
  const userId = req.query.userId;
  if (userId) {
    const userProducts = products.filter((p) => p.userId === parseInt(userId));
    if (userProducts.length === 0) {
      res.status(404).send("No products found for this user");
      return;
    }
    res.send(userProducts);
    return;
  }
  res.send(products);
});

 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports.handler = serverless(app);
