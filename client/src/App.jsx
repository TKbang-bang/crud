import React, { useState } from "react";
import "./app.css";
import axios from "axios";
import All from "./components/All";

function App() {
  const [txt, setTxt] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:3000/add", { txt });
    } catch (error) {
      console.log(error);
    }
    setTxt("");
  };

  return (
    <div className="container">
      <form onSubmit={handleAdd}>
        <input
          type="text"
          onChange={(e) => setTxt(e.target.value)}
          value={txt}
        />
        <button type="submit">Agregar</button>
      </form>
      <All />
    </div>
  );
}

export default App;
