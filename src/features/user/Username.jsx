import React from "react";
import { useSelector } from "react-redux";

export default function Username() {
  const userName = useSelector((state) => state.user.userName);

  if (!userName) return null;

  return <p className="hidden text-sm font-semibold md:block">{userName}</p>;
}
