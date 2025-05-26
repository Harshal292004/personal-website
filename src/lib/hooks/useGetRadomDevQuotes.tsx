"use client";
import { useEffect, useState } from "react";
import { getRandomQuote } from "../../../actions/quote.actions";

const useGetRadomDevQuotes = () => {
  const [quote, setQuote] = useState<{ author: any; text: any } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setIsLoading(true);
        const result = await getRandomQuote();
        setQuote({ author: result.author, text: result.text });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching quote:", error);
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return { quote, isLoading };
};

export default useGetRadomDevQuotes;
