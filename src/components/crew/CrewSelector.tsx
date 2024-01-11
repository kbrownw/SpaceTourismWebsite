import { Crew } from "../../shared/types";

type Props = {
  data: Crew[];
  crewData: Crew;
  setCrewData: (value: Crew) => void;
  setRunAnimate: (value: boolean) => void;
};

const CrewSelector = ({
  data,
  crewData,
  setCrewData,
  setRunAnimate,
}: Props) => {
  const defaultClasses =
    "py-2 px-2 rounded-full bg-white  transition duration-500 hover:opacity-50";
  return (
    <div className="flex mx-auto my-5 gap-5">
      <button
        className={`${defaultClasses} ${
          crewData.name === data[0].name ? "opacity-100" : "opacity-15"
        }`}
        onClick={() => {
          setCrewData(data[0]);
          setRunAnimate(true);
        }}
      ></button>
      <button
        className={`${defaultClasses} ${
          crewData.name === data[1].name ? "opacity-100" : "opacity-15"
        }`}
        onClick={() => {
          setCrewData(data[1]);
          setRunAnimate(true);
        }}
      ></button>
      <button
        className={`${defaultClasses} ${
          crewData.name === data[2].name ? "opacity-100" : "opacity-15"
        }`}
        onClick={() => {
          setCrewData(data[2]);
          setRunAnimate(true);
        }}
      ></button>
      <button
        className={`${defaultClasses} ${
          crewData.name === data[3].name ? "opacity-100" : "opacity-15"
        }`}
        onClick={() => {
          setCrewData(data[3]);
          setRunAnimate(true);
        }}
      ></button>
    </div>
  );
};

export default CrewSelector;
