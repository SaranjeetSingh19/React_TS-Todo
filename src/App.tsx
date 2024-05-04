import AddTodo from "./AddTodo";
import NavBar from "./Navbar";
import TodoUi from "./TodoUi";
import "./index.css";

function App() {
  return (
    <main className="flex flex-col items-center gap-5 ">
    <h1 className="text-5xl mt-8 font-bold text-red-500">Todo + TypeScript!</h1>
      <NavBar />
      <AddTodo />
      <TodoUi />
    </main>
  );
}

export default App;
