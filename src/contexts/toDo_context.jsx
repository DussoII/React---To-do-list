import { createContext, useContext, useState, useEffect } from "react";

const ToDoContext = createContext();

export function useToDo() {
  return useContext(ToDoContext);
}

export function ToDoProvider({ children }) {
  const [toDo, setToDo] = useState(() => {
    const saved = localStorage.getItem("toDoList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDo));
  }, [toDo]);

  function addItem(newItem) {
    const title = String(newItem).trim();
    if (!title) return;

    setToDo((current) => [
      ...current,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function deleteItem(id) {
    setToDo((current) => current.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setToDo((current) =>
      current.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  const value = { toDo, addItem, deleteItem, toggleItem };

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
}
