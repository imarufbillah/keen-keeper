"use client";

import { FriendsContext } from "@/context/FriendsContext";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Providers = ({ children }) => {
  const [interactions, setInteractions] = useState([
    {
      type: "call",
      friend: "Tom Baker",
      note: "Had a phone call for project follow-up",
      date: "March 29, 2026",
    },
    {
      type: "text",
      friend: "Sarah Chen",
      note: "Discussed career growth opportunities",
      date: "March 25, 2026",
    },
    {
      type: "video",
      friend: "Olivia Martinez",
      note: "Joined a virtual project meeting",
      date: "March 22, 2026",
    },
  ]);

  const [friendInteractions, setFriendInteractions] = useState([]);

  const value = {
    interactions,
    setInteractions,
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
