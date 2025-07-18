const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; // tem que ser 3000 igual ao front espera

app.use(cors());
app.use(express.json());

let livros = [];
let nextId = 1;

// Listar todos os livros
app.get('/livros', (req, res) => {
  res.json(livros);
});

// Pegar um livro específico
app.get('/livros/:id', (req, res) => {
  const livro = livros.find(l => l.id === parseInt(req.params.id));
  if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });
  res.json(livro);
});

// Criar novo livro
app.post('/livros', (req, res) => {
  const { titulo, paginas, isbn, editora } = req.body;
  const novoLivro = {
    id: nextId++,
    titulo,
    paginas,
    isbn,
    editora
  };
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

// Editar livro
app.put('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, paginas, isbn, editora } = req.body;
  const livro = livros.find(l => l.id === id);
  if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });

  // Atualiza os campos
  livro.titulo = titulo;
  livro.paginas = paginas;
  livro.isbn = isbn;
  livro.editora = editora;

  res.json(livro);
});

// Remover livro
app.delete('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = livros.findIndex(l => l.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Livro não encontrado' });

  livros.splice(idx, 1);
  res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}/livros`);
});
