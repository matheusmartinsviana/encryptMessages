import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import EncryptionInfoDropdown from "../components/EncryptionInfoDropdown";

function EncryptPage() {
  const [data, setData] = useState("");
  const [encryptedData, setEncryptedData] = useState("");

  const encryptData = async () => {
    const response = await axios.post("http://localhost:8000/encrypt", {
      data,
    });
    setEncryptedData(response.data.encryptedData);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(encryptedData);
    alert("Mensagem criptografada copiada para a área de transferência!");
  };

  return (
    <div className="container">
      <div className="card">
      <h1>Criptografar Mensagem</h1>
      <textarea
        placeholder="Digite a mensagem"
        value={data}
        onChange={(e) => setData(e.target.value)}
      ></textarea>
      <button onClick={encryptData}>Criptografar</button>
      </div>
      {encryptedData && (
        <div className="message">
          <h3>Mensagem Criptografada:</h3>
          <p>{encryptedData}</p>
          <button onClick={copyToClipboard}>Copiar</button>
        </div>
      )}
      <EncryptionInfoDropdown />
    </div>
  );
}

export default EncryptPage;
