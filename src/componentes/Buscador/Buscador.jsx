import React, { useState } from "react";
import Item from "../Item/Item"; 

const Buscador = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeResults = [
      { id:'BANDO.STYLE', name: 'BANDOLERA DE CUERO', price: 12.000, img: 'multimedia/BANDOCC2.jpg' },
      { id:'ARTE3', name: 'Gorra de SHEK', price: 13.000, img: 'multimedia/SHEK1.jpg' },
    ];
    setResults(fakeResults);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((product) => (
          <Item
            key={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Buscador;
