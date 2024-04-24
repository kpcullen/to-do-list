import { useState } from "react";

export default function AddToDo({ onAddItem }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    if (!name) return;

    e.preventDefault();
    const newItem = { name, complete: false, key: Date.now() };

    onAddItem(newItem);
    setName("");
  }

  return (
    <form className="add-to-do" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="What do you need to study?"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
}
