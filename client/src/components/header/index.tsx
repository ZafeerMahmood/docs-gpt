import { useModelStore } from "@/lib/store";
import Swap from "./theme";

function Navbar() {
  const setModel = useModelStore((state) => state.setModel);
  const model = useModelStore((state) => state.model);
  return (
    <nav className="navbar bg-base-300 ">
      <div className="navbar-start px-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            {model}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => setModel("llava")}>
              <a>LLAVA</a>
            </li>
            <li onClick={() => setModel("gpt4")}>
              <a>GPT</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <button className="btn btn-ghost text-xl uppercase">tax-gpt</button>
      </div>
      <div className="navbar-end px-5">
        <Swap />
      </div>
    </nav>
  );
}

export default Navbar;
