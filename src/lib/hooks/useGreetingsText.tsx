import { useState, useEffect } from "react";
import { GREETINGS } from "../constants";
import type { ITextProps } from "../types";
const useGreetingText = () => {
  const [text, setText] = useState<ITextProps>({
    text: "",
    style: "text-green-400",
    cursorStyle: "bg-green-400",
  });
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let direction = 1;
    let greetingIndex = 0;
    let currentGreeting = GREETINGS[greetingIndex];

    // Type and delete animation interval
    const typeInterval = setInterval(() => {
      if (direction === 1) {
        // Typing forward
        if (currentIndex <= currentGreeting.text.length) {
          setText({
            text: currentGreeting.text.substring(0, currentIndex),
            style: currentGreeting.style,
            cursorStyle: currentGreeting.cursorStyle,
          });
          currentIndex += 1;

          // When finished typing, wait before deleting
          if (currentIndex > currentGreeting.text.length) {
            setTimeout(() => {
              direction = -1;
            }, 2000);
          }
        }
      } else {
        // Deleting
        if (currentIndex >= 0) {
          setText({
            text: currentGreeting.text.substring(0, currentIndex),
            style: currentGreeting.style,
            cursorStyle: currentGreeting.cursorStyle,
          });
          currentIndex -= 1;

          // When finished deleting, move to next greeting
          if (currentIndex < 0) {
            greetingIndex = (greetingIndex + 1) % GREETINGS.length;
            currentGreeting = GREETINGS[greetingIndex];

            setTimeout(() => {
              direction = 1;
            }, 500);
          }
        }
      }
    }, 180);

    // Cursor blinking interval
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 400);

    // Clean up both intervals on unmount
    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return { text, showCursor };
};

export default useGreetingText;
