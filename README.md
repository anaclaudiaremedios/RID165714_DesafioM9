# RID165714_DesafioM9

Repositório do desafio DNC de integração frontend + backend, organizado por boas práticas e pronto para deploy.

## Estrutura do Projeto

.
├── backend/ # API Node.js/Express
└── frontend/ # Aplicação React (Vite)

yaml
Copiar
Editar

---

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/anaclaudiaremedios/RID165714_DesafioM9.git
cd RID165714_DesafioM9
2. Rodando o Backend
bash
Copiar
Editar
cd backend
npm install
npm start
O backend roda por padrão em http://localhost:3000

3. Rodando o Frontend
Abra outro terminal, na raiz do projeto:

bash
Copiar
Editar
cd frontend
npm install
npm run dev
O frontend roda por padrão em http://localhost:5173

📦 Tecnologias utilizadas
Frontend: React, Vite, (coloque aqui libs extras usadas: Sass, MUI, etc)

Backend: Node.js, Express, CORS

📚 Rotas da API (Backend)
Método	Rota	Descrição	Body/Params obrigatórios
GET	/livros	Lista todos os livros	-
GET	/livros/:id	Busca livro por ID	Parâmetro de rota: id
POST	/livros	Cria um novo livro	titulo, paginas, isbn, editora (JSON)
PUT	/livros/:id	Edita um livro	Parâmetro de rota: id
Campos editáveis
DELETE	/livros/:id	Deleta um livro	Parâmetro de rota: id

Exemplo de body para POST /livros:

json
Copiar
Editar
{
  "titulo": "Dom Casmurro",
  "paginas": 300,
  "isbn": "978-85-359-0277-1",
  "editora": "Record"
}
🗂️ Observações
O backend e o frontend são independentes e podem ser executados separadamente.

Variáveis de ambiente (se usadas) ficam em .env na respectiva pasta.

Recomendado rodar cada serviço em um terminal separado.

✍️ Autora
Ana Cláudia Remédios

