import { Link } from "react-router-dom";
import { useScreenSizeContext } from "../../context/ScreenSizeContext";

type Props = {
  to: string;
  isSelected?: boolean | undefined;
  clickFunction: (value: unknown) => void;
  number: string;
  text: string;
};

const NavLink = ({ to, isSelected, clickFunction, number, text }: Props) => {
  const { isLargeScreen } = useScreenSizeContext();
  const selectedBorder: string = isSelected ? "border-b-white" : "";
  const hidden: string = !isLargeScreen ? "hidden" : "";

  return (
    <Link
      to={to}
      onClick={clickFunction}
      className={`flex items-center h-full w-auto border-transparent border-2 transition duration-500 hover:border-b-white/50 ${selectedBorder}`}
    >
      <li>
        <div>
          <h5 className="text-[20px] tracking-[2.7px]">
            <span className={`font-bold ${hidden}`}>{number}</span> {text}
          </h5>
        </div>
      </li>
    </Link>
  );
};

export default NavLink;
