import { useState } from "react";
import Header from "./Header";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleDeleteItem(key) {
    setItems((items) => items.filter((item) => item.key !== key));
  }

  function handleToggleComplete(key) {
    setItems(
      items.map((item) =>
        item.key === key ? { ...item, complete: !item.complete } : item
      )
    );
  }

  function handleSetItems(item) {
    console.log(item);
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Header />
      <AddToDo onAddItem={handleSetItems} />
      <ToDoList
        items={items}
        onDelete={handleDeleteItem}
        onComplete={handleToggleComplete}
      />
      <Stats items={items} />
    </div>
  );
}
