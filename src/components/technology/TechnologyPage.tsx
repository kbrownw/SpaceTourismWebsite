import { useState } from "react";
import { Technology } from "../../shared/types";
import TechnologyImage from "./TechnologyImage";
import TechnologySelector from "./TechnologySelector";
import TechnologyDescription from "./TechnologyDescription";

type Props = {
  data: Technology[];
};

const TechnologyPage = ({ data }: Props) => {
  const [selectedTech, setSelectedTech] = useState<Technology>(data[0]);

  return (
    <section className="grid lg:grid-cols-[0.2fr_1fr_1fr] lg:grid-row-1 lg:ml-28 lg:gap-5">
      {/* TECHNOLOGY IMAGE COMPONENT */}
      <TechnologyImage data={data} techDataName={selectedTech.name} />
      {/* TECHNOLOGY DATA SELECTOR COMPONENT */}
      <TechnologySelector
        data={data}
        selectedTech={selectedTech}
        setSelectedTech={setSelectedTech}
      />
      {/* TECHNOLOGY DESCRIPTION COMPONENT */}
      <div className="lg:row-start-1 lg:col-start-2 lg:self-center lg:mt-14 lg:w-4/5">
        <h5 className="text-[18px] text-light-violet text-center tracking-[2.362px] lg:text-left">
          THE TERMINOLOGY...
        </h5>
        <TechnologyDescription data={data} selectedTech={selectedTech} />
      </div>
    </section>
  );
};

export default TechnologyPage;
