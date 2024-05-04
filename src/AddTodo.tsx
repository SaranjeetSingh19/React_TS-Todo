import { FormEvent, useState } from "react";
import { useTodos } from "./store/TodoContext";

const AddTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const { handleTodo } = useTodos();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleTodo(todo);
    setTodo("");
  };

  return (
    <div className="flex ">
      <form className="mt-6 text-2xl" onSubmit={submitHandler}>
        <input
          className="w-[36rem] pl-5 bg-gray-200
           outline-none border-none py-2 rounded-full"
          type="text"
          value={todo}
          placeholder="Enter your task here..."
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
      <button className="text-xl px-4 py-2 font-semibold rounded-full mt-4 ml-3 bg-blue-300">
        Add
      </button>
      </form>
    </div>
  );
};

export default AddTodo;
