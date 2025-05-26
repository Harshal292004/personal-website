import { useState, useEffect, useCallback } from "react";
import { FUN_FACTS, RANDOM_MESSAGES, STATE_STYLES } from "../constants";
const useTypedFact = () => {
  const [currentFact, setCurrentFact] = useState(FUN_FACTS[0]);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const getRandomFact = useCallback(() => {
    return Math.random() < 0.3
      ? RANDOM_MESSAGES[Math.floor(Math.random() * RANDOM_MESSAGES.length)]
      : FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)];
  }, [FUN_FACTS, RANDOM_MESSAGES]);

  useEffect(() => {
    if (isTyping) {
      if (typedText.length < currentFact.msg.length) {
        const timeout = setTimeout(
          () => {
            setTypedText(currentFact.msg.substring(0, typedText.length + 1));
          },
          Math.random() * 50 + 50,
        );
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText(typedText.substring(0, typedText.length - 1));
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentFact(getRandomFact());
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [typedText, isTyping, currentFact, getRandomFact]);

  const styles = STATE_STYLES[currentFact.state] || {};

  return { typedText, styles };
};

export default useTypedFact;
