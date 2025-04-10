"use client";
import React from "react";
import { useLoader } from "@/lib/hooks/useLoder";
import LoadingScreen from "./LoadingScreen";
import { Header } from "./Header";
import { Footer } from "./Footer";
const ClientBoody = ({ children }: { children: React.ReactNode }) => {
  const loading = useLoader();

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
};

export default ClientBoody;
