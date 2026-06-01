const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Patricio Video Worker está online e funcionando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Worker rodando na porta ${PORT}`);
});
