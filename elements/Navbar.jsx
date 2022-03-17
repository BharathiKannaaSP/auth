import React from "react";
import AuthModal from "../components/Authentication/AuthModal";
import { AuthState } from "../Context";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { AboutUs, Chef, Intro, SpecialMenu, Welcome } from "../container";

function Navbar() {
  const { user } = AuthState();
  return (
    <div>
      {user ? (
        <>
          <Header />
          <Welcome />
          <AboutUs />
          <SpecialMenu />
          <Chef />
          <Intro />
          <Sidebar />
        </>
      ) : (
        <AuthModal />
      )}
    </div>
  );
}

export default Navbar;
