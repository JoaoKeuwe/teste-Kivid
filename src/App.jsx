import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import api from "./services/api";
import "./styles.css";
function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("preencha algum cep!");
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
      console.log(response);
    } catch {
      alert("Ops erro ao buscar aqui");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de Cep</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />


        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>Rua: {cep.logradouro}</span>
          <span>Bairro: {cep.bairro}</span>

          <span>
            Localidade: {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
