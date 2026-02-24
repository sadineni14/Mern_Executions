import React, { useState } from "react";

function App() {

  // 1️⃣ Simple Array
  const fruits = ["Apple", "Banana", "Mango"];

  // 3️⃣ ID Based Static List
  const fruitWithId = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Mango" }
  ];

  // 4️⃣ useState Dynamic List
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Mango" }
  ]);

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div style={{ padding: "20px" }}>

      {/* 1️⃣ Without Key */}
      <h2>1. List Without Key (Not Recommended)</h2>
      {fruits.map((fruit) => (
        <div>
          <p>{fruit}</p>
        </div>
      ))}

      <hr />

      {/* 2️⃣ With Index Key */}
      <h2>2. List With Key (Index)</h2>
      {fruits.map((fruit, index) => (
        <div key={index}>
          <p>{index + 1}. {fruit}</p>
        </div>
      ))}

      <hr />

      {/* 3️⃣ With ID Key */}
      <h2>3. List With Key (ID)</h2>
      {fruitWithId.map((fruit) => (
        <div key={fruit.id}>
          <p>{fruit.id}. {fruit.name}</p>
        </div>
      ))}

      <hr />

      {/* 4️⃣ useState + ID + Delete */}
      <h2>4. List With useState + Unique ID</h2>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.id}. {item.name}</p>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}

    </div>
  );
}

export default App;