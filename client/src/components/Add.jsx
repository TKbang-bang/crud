import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [txt, setTxt] = useState("");
  const locate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:3000/add", { txt });
      locate("/");
    } catch (error) {
      console.log(error);
    }
    setTxt("");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Agregar</h1>
      <div className="cont">
        <input
          type="text"
          placeholder="Agregar un texto..."
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
}

export default Add;
