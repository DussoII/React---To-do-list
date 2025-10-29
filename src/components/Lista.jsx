import { useToDo } from "../contexts/toDo_context";
import "../styles.css";

export default function Lista() {
  const { toDo, deleteItem, toggleItem } = useToDo();

  return (
    <ul className="list">
      {toDo.length === 0 && <p>Nenhum item ainda!</p>}
      {toDo.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={!!item.completed}
              onChange={() => toggleItem(item.id)}
            />
            {String(item.title)}
          </label>
          <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}