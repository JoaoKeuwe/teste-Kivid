import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import api from "./services/api";
import "./styles.css";

// Importando o React tostify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Função principal que consome a api, cria estados, utiliza os avisos do react Tostify e cria a estrutura do site 
function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});
  const notify = (message) => toast.dark(message, {
    position: toast.POSITION.TOP_RIGHT,
    className: 'toast-message',
  });

  async function handleSearch() {
    if (input === "") {
      notify('⛔ Preencha um CEP');
    } else {

      try {
        const response = await api.get(`${input}/json`);
        setCep(response.data);
        setInput("");
        console.log(response);
      } catch {
        notify("🚫 Preencha um CEP válido ");
        setInput("");
      }
    }
  }

  // retornando a estrutura do Site, com a API sendo já consumida 
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch} >
          <FiSearch size={25} color="#fff" />
        </button>
      </div>
      <ToastContainer />

      {/* retornando os resultados da API  */}
      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>Rua: {cep.logradouro}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Localidade: {cep.localidade} - {cep.uf}</span>
        </main>
      )}
    </div>
  );
}

export default App;
