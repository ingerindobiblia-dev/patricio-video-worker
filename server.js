const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Patricio Video Worker está online!');
});

app.post('/render', (req, res) => {
  console.log('✅ Job recebido:', req.body);
  
  res.json({ 
    success: true, 
    message: 'Job recebido com sucesso',
    jobId: Date.now().toString(),
    status: 'processing'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Worker rodando na porta ${PORT}`);
});
