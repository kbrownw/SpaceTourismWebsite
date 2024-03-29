import { Crew } from "../../shared/types";

type Props = {
  data: Crew[];
  crewData: Crew;
  setCrewData: (value: Crew) => void;
};

const CrewSelector = ({ data, crewData, setCrewData }: Props) => {
  const defaultClasses =
    "py-2 px-2 rounded-full bg-white  transition duration-500 hover:opacity-50 tap:opacity-50";
  return (
    <div className="flex mx-auto my-7 gap-7 lg:ml-28 lg:self-end lg:col-start-1">
      <button
        className={`${defaultClasses} ${
          crewData.name === data[0].name ? "opacity-100" : "opacity-15"
        }`}
        onClick={() => {
          setCrewData(data[0]);
        }}
      ></button>
      <button
        className={`${defaultClasses} ${
          crewData.name === data[1].name ? "opacity-100" : "opacity-15"
        }`}
        onClick={() => {
          setCrewData(data[1]);
        }}
      ></button>
      <button
        className={`${defaultClasses} ${
          crewData.name === data[2].name ? "opacity-100" : "opacity-15"
        }`}
        onClick={() => {
          setCrewData(data[2]);
        }}
      ></button>
      <button
        className={`${defaultClasses} ${
          crewData.name === data[3].name ? "opacity-100" : "opacity-15"
        }`}
        onClick={() => {
          setCrewData(data[3]);
        }}
      ></button>
    </div>
  );
};

export default CrewSelector;
