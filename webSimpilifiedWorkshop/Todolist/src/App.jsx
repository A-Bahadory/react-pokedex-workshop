import { useState } from "react";
import "./style.css";
export default function App() {
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form"></form>
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
      <h1 className="header">To do list</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>

      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
