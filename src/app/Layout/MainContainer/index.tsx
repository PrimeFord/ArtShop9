import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import React from "react";

const MainContainer = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <div className="h-auto py-2 font-circular">{children}</div>
      <Footer />
    </>
  );
};

export default MainContainer;
