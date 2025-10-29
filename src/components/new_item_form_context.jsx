import { useState } from "react";
import { useToDo } from "../contexts/toDo_context";

export default function NewItemForm() {
  const [newItem, setNewItem] = useState("");
  const { addItem } = useToDo();

  function HandleSubmit(e) {
    e.preventDefault();

    addItem(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={HandleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Novo item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)} 
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}