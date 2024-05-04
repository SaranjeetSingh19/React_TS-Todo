import { ReactNode, createContext, useContext, useState } from "react";

export type TodoTypeProvider = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  deleteButton: (id: string) => void;
};

export const todoContext = createContext<TodosContext | null>(null);

export const TodoProvider = ({ children }: TodoTypeProvider) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const newTodos = localStorage.getItem("todos") || "[]";
      return JSON.parse(newTodos) as Todo[];
    } catch (error) {
      return [];
    }
  });

  const handleTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: String(Math.floor(Math.random() * 1000)),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.map((i) => {
        if (id === i.id) {
          return {
            ...i,
            completed: !i.completed,
          };
        }
        return i;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const deleteButton = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.filter((i) => i.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <todoContext.Provider
      value={{ todos, handleTodo, toggleTodoAsCompleted, deleteButton }}
    >
      {children}
    </todoContext.Provider>
  );
};

// consumer
export const useTodos = () => {
  const TodoConsumer = useContext(todoContext);
  if (!TodoConsumer) {
    throw new Error("Invalid");
  }

  return TodoConsumer;
};
