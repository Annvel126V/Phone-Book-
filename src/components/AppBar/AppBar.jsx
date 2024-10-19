import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const AppBar = () => {
  const buldLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header className={s.header}>
      {isLoggedIn && <p className={s.user}>Welcome {user.name}</p>}

      <div className={s.links}>
        <div className={s.linkHome}>
          <NavLink className={buldLinkClass} to="/">
            Home
          </NavLink>
        </div>
        {isLoggedIn && (
          <NavLink className={buldLinkClass} to="/contacts">
            Contacts
          </NavLink>
        )}
        {!isLoggedIn && (
          <div className={s.link}>
            <NavLink className={buldLinkClass} to="/login">
              Login
            </NavLink>
            <NavLink className={buldLinkClass} to="/register">
              Register
            </NavLink>
          </div>
        )}

        {isLoggedIn && (
          <button
            onClick={() => dispatch(logout())}
            className="btn btn-secondary"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default AppBar;
