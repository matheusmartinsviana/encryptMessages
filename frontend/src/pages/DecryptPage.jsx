import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function DecryptPage() {
  const [manualEncryptedData, setManualEncryptedData] = useState("");
  const [decryptedData, setDecryptedData] = useState("");

  const decryptManualData = async () => {
    const response = await axios.post("http://localhost:8000/decrypt", {
      encryptedData: manualEncryptedData,
    });
    setDecryptedData(response.data.decryptedData);
  };

  return (
    <div className="container">
      <h1>Descriptografar Mensagem</h1>
      <textarea
        placeholder="Cole a mensagem criptografada"
        value={manualEncryptedData}
        onChange={(e) => setManualEncryptedData(e.target.value)}
      ></textarea>
      <button onClick={decryptManualData}>Descriptografar</button>

      {decryptedData && (
        <div className="message">
          <h3>Mensagem Original:</h3>
          <p>{decryptedData}</p>
        </div>
      )}
    </div>
  );
}

export default DecryptPage;