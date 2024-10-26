# Projeto de Criptografia RSA com Node.js
Este projeto demonstra o uso de criptografia assimétrica RSA para criptografar e descriptografar dados utilizando Node.js. A aplicação inclui um servidor Express que gera um par de chaves pública e privada e expõe rotas para criptografar e descriptografar dados.

# 🛠️ Tecnologias Utilizadas
Node.js: Plataforma JavaScript para execução do código no lado do servidor. <br>
Express: Framework para construção de APIs web. <br>
crypto: Módulo nativo do Node.js utilizado para operações criptográficas. <br>
cors: Middleware para permitir solicitações de diferentes origens. <br>
body-parser: Middleware para análise de corpos de requisições JSON. <br>

# 🔐 Sobre a Criptografia
Este projeto utiliza RSA (Rivest–Shamir–Adleman), um algoritmo de criptografia assimétrica. A criptografia assimétrica usa um par de chaves: <br> 

- Chave Pública: Usada para criptografar dados. Pode ser distribuída publicamente. <br>
- Chave Privada: Usada para descriptografar dados. Deve ser mantida em segredo. <br>
## Características do RSA
Chave Pública é usada para criptografar dados e é enviada ao cliente para que ele possa proteger as informações antes de enviá-las ao servidor. <br>
Chave Privada permanece no servidor e é usada para descriptografar os dados recebidos, garantindo que apenas o servidor tenha acesso aos dados originais. <br>
Modulus Length (Comprimento do Módulo): No projeto, foi utilizado um comprimento de 2048 bits, que é considerado seguro para a maioria das aplicações. <br>
### Exemplo de Chave Pública
```bash
Copiar código
-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEA...
-----END RSA PUBLIC KEY-----
Rotas da API
```

## 🌐 Rotas da API

1. Obter a Chave Pública
GET /publicKey <br>

Retorna a chave pública para que os dados possam ser criptografados pelo cliente.
<br>
Resposta Exemplo:

```json
{
  "publicKey": "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEA...\n-----END RSA PUBLIC KEY-----"
}
```

2. Criptografar Dados
POST /encrypt <br>

Criptografa dados usando a chave pública.
<br>
Parâmetros de Requisição:
<br>
data (string): Dados a serem criptografados.
Resposta Exemplo:

```json
{
  "encryptedData": "ZsJQaR...==" // Dados criptografados em base64
}
```

3. Descriptografar Dados
POST /decrypt <br>

Descriptografa dados usando a chave privada do servidor.
<br>
Parâmetros de Requisição:
<br>
encryptedData (string): Dados criptografados em formato base64.
Resposta Exemplo:

```json
{
  "decryptedData": "Texto original"
}
```

## 🚀 Como Executar o Projeto
Clone o repositório:

```bash
Copiar código
git clone https://github.com/matheusmartinsviana/encryptMessages
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:
```bash
npm start
```
O servidor estará rodando em http://localhost:8000.

## 📦 Dependências
- express
- crypto (módulo nativo do Node.js)
- cors
- body-parser
