"use client";

import { FriendsContext } from "@/context/FriendsContext";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Providers = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  const [friends, setFriends] = useState([]);

  // Fetch data on mount
  useEffect(() => {
    const loadFriendsData = async () => {
      const res = await fetch("http://localhost:3000/friends.json");
      const data = await res.json();
      setFriends(data);
    };
    const loadInteractionsData = async () => {
      const res = await fetch("http://localhost:3000/interactions.json");
      const data = await res.json();
      setInteractions(data);
    };

    loadFriendsData();
    loadInteractionsData();
  }, [setFriends]);

  const value = {
    interactions,
    setInteractions,
    friends,
    setFriends,
  };
  return (
    <FriendsContext.Provider value={value}>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </FriendsContext.Provider>
  );
};

export default Providers;
