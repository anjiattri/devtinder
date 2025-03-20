import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { feedData } from "../utils/dummy";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const getFeed = async () => {
    if (feed) return;
    try {
      const feed = await axios.get(BASE_URL + "feed", {
        withCredentials: true,
      });
      console.log("feed", feed);
      dispatch(addFeed(feedData));
    } catch (err) {
      dispatch(addFeed(feedData));
      console.log("err", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div>
      {feed?.data?.map((user) => (
        <UserCard user={user} key={user._id} />
      ))}
    </div>
  );
};

export default Feed;
