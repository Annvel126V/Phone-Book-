import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";

const AppBar = () => {
  return (
    <div>
      <div className={s.title}>Phonebook</div>
      <div className={s.title}>Welcome</div>
      <div className={s.links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </div>
  );
};

export default AppBar;
