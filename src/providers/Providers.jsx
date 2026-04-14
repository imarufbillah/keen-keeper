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
      description: "Had a phone call for project follow-up",
      date: "March 29, 2026",
    },
    {
      type: "text",
      friend: "Sarah Chen",
      description: "Discussed career growth opportunities",
      date: "March 25, 2026",
    },
    {
      type: "video",
      friend: "Olivia Martinez",
      description: "Joined a virtual project meeting",
      date: "March 22, 2026",
    },
  ]);

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
