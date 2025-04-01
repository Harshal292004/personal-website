"use client"
import { useEffect } from "react";

const useClickOutside = (
  ref: React.RefObject<HTMLElement | null>, 
  callback: (e: MouseEvent) => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback(e);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
}

export default useClickOutside;