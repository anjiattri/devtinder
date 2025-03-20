import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { userdata } from "../utils/dummy";

const Body = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const location = useLocation(); // Get current path
  console.log("location", location);
  const fetchUser = async () => {
    if (user) {
      return;
    }
    try {
      const user = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      console.log("user", user);
      dispatch(addUser(userdata));
    } catch (err) {
      if (location.pathname === "/login") {
        dispatch(removeUser());
      } else {
        dispatch(addUser(userdata));
      }
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
