"use client";
import Link from "next/link";
import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import Image from "next/image";
import NavMenu from "./Menu/NavMenu";
import Sidebar from "./Menu/Sidebar";
import HeaderOffcanvas from "./Menu/HeaderOffcanvas";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import logo_1 from "@/assets/img/logo/logo.png";
import booky_logo from "@/assets/img/logo/booky-logo.png";

const Header = () => {
  const { sticky } = UseSticky();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [offCanvas, setOffCanvas] = useState<boolean>(false);

  return (
    <>
      <header id="header">
        <div
          id="sticky-header"
          className={`menu-area transparent-header ${
            sticky ? "sticky-menu" : ""
          }`}
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link href="/">
                        <Image
                          src={booky_logo}
                          alt="Logo"
                          width={175}
                          height={55}
                        />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <NavMenu />
                    </div>
                    <div className="header-action">
                      <ul className="list-wrap">
                        <li className="header-login">
                          <ConnectButton
                            accountStatus={{
                              smallScreen: "avatar",
                              largeScreen: "full",
                            }}
                          />
                        </li>
                        {/* <li className="offcanvas-menu">
                          <a
                            onClick={() => setOffCanvas(true)}
                            style={{ cursor: "pointer" }}
                            className="menu-tigger"
                          >
                            <i className="fas fa-bars"></i>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                    <div
                      onClick={() => setIsActive(true)}
                      className="mobile-nav-toggler"
                    >
                      <i className="fas fa-bars"></i>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar style={false} isActive={isActive} setIsActive={setIsActive} />
      {/* <HeaderOffcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} /> */}
    </>
  );
};

export default Header;
