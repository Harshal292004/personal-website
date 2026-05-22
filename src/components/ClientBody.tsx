"use client";
import React from "react";
import { useLoader } from "@/lib/hooks/useLoder";
import LoadingScreen from "./LoadingScreen";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { usePathname } from "next/navigation";

const ClientBoody = ({ children }: { children: React.ReactNode }) => {
  const loading = useLoader();
  const pathname = usePathname();
  const isOldRoute = pathname.startsWith("/old");

  React.useEffect(() => {
    if (isOldRoute) {
      document.body.classList.remove("new-site-scrollbar");
      document.body.classList.add("old-site-scrollbar");
    } else {
      document.body.classList.remove("old-site-scrollbar");
      document.body.classList.add("new-site-scrollbar");
    }
  }, [isOldRoute]);

  if (isOldRoute) {
    return (
      <>
        {loading ? (
          <LoadingScreen progress={100}></LoadingScreen>
        ) : (
          <>
            <Header id="#header"></Header>
            {children}
            <Footer id="#footer" />
          </>
        )}
      </>
    );
  }

  return <>{children}</>;
};

export default ClientBoody;
