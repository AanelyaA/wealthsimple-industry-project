const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello pretty ladies!');
});

const port=process.env.PORT ||3000;
app.listen(port, () => {
  console.log(`Wealthsimple server is running on port ${port}`);
});