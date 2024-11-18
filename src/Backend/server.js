const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const userRoutes = require('./routes/userRoutes');
const db = require('./config/db'); 

const app = express();
const PORT = process.env.PORT || 5000; // Certifique-se de que a porta esteja correta

// Conexão com o banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar com o banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados MySQL');
  }
});

// Middleware
app.use(cors({ // Configurando CORS para permitir conexão com o frontend
  origin: 'http://localhost:3000', // Substitua pela URL do frontend em produção
  credentials: true,
}));
app.use(bodyParser.json()); // Para requisições no formato JSON
app.use(express.json()); // Para lidar com JSON no corpo das requisições
app.use(express.urlencoded({ extended: true })); // Para lidar com dados enviados via formulário

// Rotas
app.use('/api/users', userRoutes); // Rotas relacionadas ao usuário

// Upload de arquivos (se necessário)
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'Upload realizado com sucesso!', file: req.file });
});

// Rota inicial para teste
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Inicializar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});

