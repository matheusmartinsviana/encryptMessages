const express = require("express");
const crypto = require("crypto");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  // gerado com um comprimento de 2048 bits
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "pkcs1",
    format: "pem",
  },
  /* base64
    -----BEGIN RSA PUBLIC KEY-----
    MIIBCgKCAQEA...
    -----END RSA PUBLIC KEY-----
    */
  privateKeyEncoding: {
    type: "pkcs1",
    format: "pem",
  },
});

app.get("/publicKey", (req, res) => {
  res.send({ publicKey });
});

app.post("/encrypt", (req, res) => {
  const { data } = req.body;
  const encryptedData = crypto.publicEncrypt(publicKey, Buffer.from(data));
  res.send({ encryptedData: encryptedData.toString("base64") });
});

app.post("/decrypt", (req, res) => {
  const { encryptedData } = req.body;
  const decryptedData = crypto.privateDecrypt(
    privateKey,
    Buffer.from(encryptedData, "base64")
  );
  res.send({ decryptedData: decryptedData.toString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
