import { ToDoProvider } from "./contexts/toDo_context";
import NewItemForm from "./components/new_item_form_context";
import Lista from "./components/Lista";
import "./styles.css";

export default function App() {
  return (
    <ToDoProvider>
      <div>
        <h1 className="header">To Do List</h1>
        <NewItemForm />
        <Lista />
      </div>
    </ToDoProvider>
  );
}