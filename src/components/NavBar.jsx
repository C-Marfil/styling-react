import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
  };
  return (
    <nav>
      <div onClick={() => handleClick("/")}>
        <p>Traditional</p>
      </div>
      <div onClick={() => handleClick("/modules")}>
        <p>CSS Modules</p>
      </div>
      <div onClick={() => handleClick("/styled_components")}>
        <p>Styled Components</p>
      </div>
    </nav>
  );
};

export default NavBar;
