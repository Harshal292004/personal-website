"use client";

import { useTheme } from "next-themes";
import Star from "@/components/ui/shapes/Star";
import Circle from "@/components/ui/shapes/Circle";
import Triangle from "@/components/ui/shapes/Triangle";

export default function BlogDecorations() {
  const { theme } = useTheme();

  return (
    <>
      <Star
        className="absolute top-12 right-16 animate-pulse"
        color={theme === "dark" ? "#FFD54F" : "#43A047"}
        size={40}
      />
      <Star
        className="absolute top-20 left-12 animate-pulse"
        color={theme === "dark" ? "#FFECB3" : "#2E7D32"}
        size={25}
      />
      <Circle
        className="absolute top-32 right-1/4 animate-pulse"
        color={theme === "dark" ? "#E0E0E0" : "#FFA726"}
        size={20}
      />
      <Triangle
        className="absolute top-16 right-1/3 animate-pulse"
        color={theme === "dark" ? "#F9A825" : "#FF5722"}
        size={18}
      />
    </>
  );
}

