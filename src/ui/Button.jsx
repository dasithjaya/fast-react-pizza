import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  //   const className =
  //         "rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-700 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none sm:px-6 sm:py-4";

  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold tracking-wide uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full font-semibold tracking-wide uppercase text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:outline-none disabled:cursor-not-allowed border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 focus:text-stone-800 hover:text-stone-800",
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
