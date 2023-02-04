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

 

export default App;
