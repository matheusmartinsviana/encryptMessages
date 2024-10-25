import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import code from "../assets/code.png";
import "./styles.css";

function EncryptionInfoDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button
        onClick={toggleDropdown}
        className={`dropdown-button ${isOpen ? "open" : ""}`}
      >
        Sobre a criptografia utilizada?
        <IoIosArrowUp />
      </button>

      <div className={`dropdown-content ${isOpen ? "open" : "closed"}`}>
        <p>
          Utilizei node.js e usei o crypto que é uma pacote nativo. A
          criptografia utilizada foi RSA(pkcs1) que utiliza 2048 bits.
        </p>
        <img src={code} height={300} width={300} alt="" />
        <p>
          A criptografia é amplamente utilizada para proteger dados sensíveis e
          garantir a integridade da comunicação em aplicações modernas.
        </p>
      </div>
    </div>
  );
}

export default EncryptionInfoDropdown;
