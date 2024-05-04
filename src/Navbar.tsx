import { Link } from "react-router-dom";

export default function NavBar() {

   

  return (
    <nav className="text-2xl mt-10 font-bold">
        <Link className="mr-8  text-green-400 shadow-xl p-2 rounded-xl px-5" to="/" >All</Link>
        <Link className="mr-8 text-green-400 shadow-xl p-2 rounded-xl px-5 " to="/?todos=active" >Active</Link>
        <Link className="mr-8 text-green-400 shadow-xl p-2 rounded-xl px-5" to="/?todos=completed" >Completed</Link>
    </nav>
  )
}