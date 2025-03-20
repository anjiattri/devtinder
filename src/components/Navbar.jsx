import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("user: " + user);

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          👩🏻‍💻 DevTinder
        </Link>
      </div>
      <div className="flex gap-2">
        {user && (
          <p className="flex justify-center items-center">
            Welcome, {user.name}
          </p>
        )}
        <div className="dropdown dropdown-end mx-5">
          {user && (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ">
                <img alt="user-photo" src={user.photoUrl} />
              </div>
            </div>
          )}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile<span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  dispatch(addUser(null));
                  navigate("/login");
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
