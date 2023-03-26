import * as React from "react";
import { Techs } from "../models/techs.models";

interface ITechCardProps {
  tech: Techs;
}

const TechCard: React.FunctionComponent<ITechCardProps> = ({ tech }) => {
  return (
    <div>
      <div className="card-0">
        <img src={tech.img} />
      </div>
      <p>{tech.name}</p>
    </div>
  );
};

export default TechCard;
