import React, { useState } from "react";

function App() {
  const [items, setItems] = useState(["Apple", "Banana", "Mango"]);

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <h2>Fruit List</h2>

      {items.map((item, index) => (
        <div key={index}>
          <p>{index + 1}. {item}</p>
          <button onClick={() => deleteItem(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
