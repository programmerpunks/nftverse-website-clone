import React from "react";

export default function SocialCard({ item }) {
  const { _id, icon, stats, caption, customStyle } = item;
  return (
    <div
      key={_id}
      className={`p-3 rounded-lg backdrop-opacity-10 bg-[#9A9FA2]/20 border border-[#65686A] 
      flex flex-col justify-center items-center ${customStyle}`}
    >
      {icon}
      <h1 className="text-2xl text-white">{stats}</h1>
      <p className="text-lg secondary-text">{caption}</p>
    </div>
  );
}
