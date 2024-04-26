import Swap from "./theme";

function Navbar() {
  return (
    <div className="bg-base-300 w-full">
      <nav className="navbar bg-base-300 max-w-4xl mx-auto px-5">
        <div className="navbar-start ">
          <button className="btn btn-ghost text-xl uppercase">tax-gpt</button>
        </div>
        <div className="navbar-center "></div>
        <div className="navbar-end ">
          <Swap />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
