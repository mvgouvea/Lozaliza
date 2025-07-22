# Lozaliza projeto desenvolvido em cooperação do instrutor da AWARI

## Instruções de Desenvolvimento

### Visão Geral do Projeto
- **Lozaliza** é uma aplicação Node.js que utiliza Express e Mongoose para interagir com um banco de dados MongoDB.
- O ponto de entrada principal é o `app.js`. A configuração do banco está em `configs/database.js`.
- O MongoDB normalmente é executado via Docker Compose (`docker-compose.yml`), com variáveis de ambiente para credenciais e porta do banco.
### Arquitetura & Fluxo de Dados
- A conexão com o banco é estabelecida na inicialização usando Mongoose, com parâmetros de conexão vindos de `configs/database.js`.

### Fluxos de Trabalho do Desenvolvedor
- **Iniciar o app:**
  - Use `nodemon app.js` para desenvolvimento (reinicia automaticamente ao alterar arquivos).
- **Instalar dependências:**
  - Execute `npm install` após clonar ou atualizar dependências.
### Padrões & Convenções Específicas do Projeto
- Todos os arquivos de configuração estão no diretório `configs/`.
- A conexão com o banco usa a API baseada em Promises do Mongoose.
- O tratamento de erros da conexão com o banco é feito na inicialização; o app encerra em caso de falha.
- Use `express.json()` para payloads JSON e `express.urlencoded({ extended: true })` para dados de formulário. (Nota: Há um erro de digitação em `app.js`: use `express.urlencoded`, não `express.urlenconded`.)
- Variáveis de ambiente são esperadas para o Docker Compose; atualize o `.env` conforme necessário.

### Pontos de Integração
- O MongoDB é o único serviço externo, gerenciado via Docker Compose.
- Nenhuma outra API ou serviço externo está integrado neste momento.

### Arquivos Principais
- `app.js`: Lógica principal da aplicação, middleware e inicialização do servidor.
- `configs/database.js`: Configuração do Mongoose e string de conexão do banco.
- `docker-compose.yml`: Configuração do container MongoDB.
- `.env`: Variáveis de ambiente para configuração do banco (não incluído por padrão).

### Exemplo: Adicionando uma Nova Rota
```js
// Em app.js
app.get('/status', (req, res) => {
  res.json({ status: 'ok' });
});
```

---

**Em caso de dúvidas sobre convenções, peça esclarecimentos ou verifique padrões existentes em `app.js` e `configs/database.js`.**
