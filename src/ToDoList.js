import Item from "./Item";

export default function ToDoList({ items, onDelete, onComplete }) {
  return (
    <div className="list-container">
      {items.length === 0 ? (
        "Start entering your courses to learn!"
      ) : (
        <ul className="list-container">
          {items.map((item) => (
            <Item
              item={item}
              key={item.key}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
