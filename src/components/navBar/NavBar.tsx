import { SelectedPage } from "../../shared/types";
import Logo from "../../assets/images/shared/logo.svg";
import IconHamburger from "../../assets/images/shared/icon-hamburger.svg";
import IconClose from "../../assets/images/shared/icon-close.svg";
import { useScreenSizeContext } from "../../context/ScreenSizeContext";
import NavLink from "./NavLink";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ selectedPage, setSelectedPage }: Props) => {
  const { isLargeScreen, isMediumScreen } = useScreenSizeContext();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className="flex items-center h-[100px] md:h-auto lg:py-[40px]">
      {/* LOGO IMAGE */}
      <div className=" min-w-fit pl-[30px] md:pl-[60px] md:pr-[40px]">
        <img alt="logo" src={Logo} className="w-[48px] h-[48px]" />
      </div>
      {/* HORIZONTAL RULE */}
      {isLargeScreen ? (
        <div className="relative w-2/3">
          <hr className="absolute opacity-[0.2515] right-[-40px] w-full z-10" />
        </div>
      ) : null}
      {/* DESKTOP MENU */}
      {isMediumScreen && (
        <ul className="flex items-center justify-center h-[96px] backdrop-blur-[40px] bg-white/[.04] px-[50px] ml-auto gap-x-[36px] lg:w-full lg:px-0 lg:gap-x-14">
          <NavLink
            to="/"
            isSelected={selectedPage === SelectedPage.Home}
            clickFunction={() => setSelectedPage(SelectedPage.Home)}
            number="00"
            text="HOME"
          />
          <NavLink
            to="/destination"
            isSelected={selectedPage === SelectedPage.Destination}
            clickFunction={() => setSelectedPage(SelectedPage.Destination)}
            number="01"
            text="DESTINATION"
          />
          <NavLink
            to="/crew"
            isSelected={selectedPage === SelectedPage.Crew}
            clickFunction={() => setSelectedPage(SelectedPage.Crew)}
            number="02"
            text="CREW"
          />
          <NavLink
            to="/technology"
            isSelected={selectedPage === SelectedPage.Technology}
            clickFunction={() => setSelectedPage(SelectedPage.Technology)}
            number="03"
            text="TECHNOLOGY"
          />
        </ul>
      )}
      {/* MOBILE MENU */}
      {!isLargeScreen && !isMediumScreen && (
        <>
          {!toggleMenu ? (
            // HAMBURGER ICON
            <button
              className="ml-auto mr-6 "
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <img
                className="w-[24px] h-[24px]"
                alt="hamburger-icon"
                src={IconHamburger}
              />
            </button>
          ) : (
            <div className="grid grid-rows-[150px_1fr] fixed w-3/5 h-full top-0 right-0 py-5 pl-10 pr-5 backdrop-blur-[40px] bg-white/[.04]">
              <button
                className="justify-self-end w-[26px] h-[26px] mt-4"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <img
                  className="w-full h-full"
                  alt="hamburger-icon"
                  src={IconClose}
                />
              </button>
              <ul className="flex flex-col max-h-[300px] gap-10">
                <Link to="/" onClick={() => setSelectedPage(SelectedPage.Home)}>
                  <li>
                    <h5 className="text-[20px] tracking-[2.7px]">
                      <span className="font-bold">00</span> HOME
                    </h5>
                  </li>
                </Link>
                <Link
                  to="/destination"
                  onClick={() => setSelectedPage(SelectedPage.Destination)}
                >
                  <li>
                    <h5 className="text-[20px] tracking-[2.7px]">
                      <span className="font-bold">01</span> DESTINATION
                    </h5>
                  </li>
                </Link>
                <Link
                  to="/crew"
                  onClick={() => setSelectedPage(SelectedPage.Crew)}
                >
                  <li>
                    <h5 className="text-[20px] tracking-[2.7px]">
                      <span className="font-bold">02</span> CREW
                    </h5>
                  </li>
                </Link>
                <Link
                  to="/technology"
                  onClick={() => setSelectedPage(SelectedPage.Technology)}
                >
                  <li>
                    <h5 className="text-[20px] tracking-[2.7px]">
                      <span className="font-bold">03</span> TECHNOLOGY
                    </h5>
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default NavBar;
