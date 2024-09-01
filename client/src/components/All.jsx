import axios from "axios";
import React, { useEffect, useState } from "react";

function All() {
  const [all, setAll] = useState([]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const getAll = async () => {
      try {
        const dt = await axios.get("http://localhost:3000");
        setAll(dt.data);
        // console.log(dt.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAll();
  }, []);

  const Normal = ({ al }) => {
    return (
      <div key={al.id} className="single">
        <p>{al.txt}</p>
        <div>
          <button className="e" onClick={() => setEdit(true)}>
            Edit
          </button>
          <button className="d">Del</button>
        </div>
      </div>
    );
  };

  const Editable = ({ al }) => {
    const [newVal, setNewVal] = useState(al.txt);

    const handleEdit = (e) => {
      e.preventDefault();
      console.log(newVal);
      setEdit(false);
    };

    return (
      <form onSubmit={handleEdit} className="single">
        <input
          type="text"
          value={newVal}
          onChange={(e) => setNewVal(e.target.value)}
        />
        <button type="submit">OK</button>
      </form>
    );
  };

  const United = ({ al }) => {
    return edit ? <Editable al={al} /> : <Normal al={al} />;
  };

  return (
    <div className="all">
      {all.map((al) => {
        return <United al={al} />;
      })}
    </div>
  );
}

export default All;
