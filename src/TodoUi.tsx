import { useSearchParams } from "react-router-dom";
import { useTodos } from "./store/TodoContext";

const TodoUi = () => {
  const { todos, toggleTodoAsCompleted, deleteButton } = useTodos();

  const [searchParams] = useSearchParams();
  const paramData = searchParams.get("todos");
  console.log(paramData);

  let filteredData = todos;

  if (paramData === "active") {
    filteredData = filteredData.filter((i) => !i.completed);
  }

  if (paramData === "completed") {
    filteredData = filteredData.filter((i) => i.completed);
  }

  return (
   <div className="">
     <ul className="font-semibold">
  {filteredData.map((i) => {
    return (
      <li className="mb-5 text-2xl border-b-2 w-[40rem] border-gray-300 py-2 text-center flex justify-between items-center" key={i.id}>
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            id={`todo-${i.id}`}
            checked={i.completed}
            onChange={() => toggleTodoAsCompleted(i.id)}
            className="form-checkbox h-6 w-6 text-indigo-600 transition duration-150 ease-in-out"
          />
          <label className="text-3xl text-zinc-800" htmlFor={`todo-${i.id}`}>{i.task}</label>
        </div>
        {i.completed && (
          <button className="bg-red-400 text-lg px-3 py-2 rounded-full" onClick={() => { deleteButton(i.id); }}>Delete</button>
        )}
      </li>
    );
  })}
</ul>

   </div>
  );
};

export default TodoUi;
