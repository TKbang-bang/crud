import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [all, setAll] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const dt = await axios.get("http://localhost:3000");
        setAll(dt.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, []);

  const handleEdit = (obj) => {
    // try {
    //   axios.post("http://localhost:3000/" + obj);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="container">
      <div className="hd">
        <h1>Lista</h1>
        <Link to={"/add"}>Agregar</Link>
      </div>
      <div className="all">
        {all.map((al) => {
          return (
            <div className="single" key={al.id}>
              <p>{al.txt}</p>
              <div className="btns">
                <button
                  to={"/edit"}
                  className="e"
                  onClick={() => {
                    let id = al.id;
                    try {
                      axios.post("http://localhost:3000/id", { id });
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  Editar
                </button>
                <Link className="b">Borrar</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
