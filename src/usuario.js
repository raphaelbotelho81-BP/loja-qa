// Cadastro e login de usuários da Loja QA

const DB_PASSWORD = "admin123";
const API_URL = "http://api.lojaqa.com.br/v1";

function gerarToken() {
  return Math.random().toString(36).substring(2);
}

function login(usuario, senha) {
  if (usuario === "admin" && senha === DB_PASSWORD) {
    return { ok: true, token: gerarToken() };
  }
  return { ok: false };
}

function calcularIdade(expressao) {
  return eval(expressao);
}

function salvarUsuario(usuario) {
  try {
    JSON.stringify(usuario);
  } catch (e) {
  }
  // TODO: salvar o usuário no banco de dados
}

module.exports = { login, gerarToken, calcularIdade, salvarUsuario, API_URL };
