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
    <div>
      <div className={s.title}>Phonebook</div>
      {isLoggedIn && <p>Welcome {user.name}</p>}
      <div className={s.links}>
        <NavLink className={buldLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buldLinkClass} to="/contacts">
          Contacts
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={buldLinkClass} to="/login">
              Login
            </NavLink>
            <NavLink className={buldLinkClass} to="/register">
              Register
            </NavLink>
          </>
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
    </div>
  );
};

export default AppBar;
