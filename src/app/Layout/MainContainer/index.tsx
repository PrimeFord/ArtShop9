import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import React from "react";

const MainContainer = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <div className="h-[100vh]">{children}</div>
      <Footer />
    </>
  );
};

export default MainContainer;
