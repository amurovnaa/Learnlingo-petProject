import { NavLink } from "react-router";

export const UserMenu = () => {
  return (
    <div>
      <NavLink>Log out </NavLink>
      <NavLink>
        <button>My Favorites</button>
      </NavLink>
    </div>
  );
};
