import Logo from "../assets/5977595.png"
const NavBar = () => {
  return (
    <div className="navbar w-full bg-base-100 flex justify-between">
      <div className="w-20 rounded-full">
        <img
          alt="Tailwind CSS Navbar component"
          src={Logo} />
      </div>
      <div className="navbar-end">
        <a className="btn">AboutUs</a>
      </div>
    </div>
  );
}

export default NavBar;