import React from "react";

interface VacancyCardProps {
  heading: string;
  one: string;
  two: string;
  three: string;
}

const Vacancy_card: React.FC<VacancyCardProps> = (props) => {
  return (
    <div className="p-7 bg-[#fefbec] w-fit rounded-xl">
      <p className="font-bold text-[18x]">{props.heading}</p>
      <ul
        className="ml-3 font-medium text-[14px]"
        style={{ listStyleType: "disc" }}
      >
        <li className="pt-3">{props.one}</li>
        <li className="pt-3">{props.two}</li>
        <li className="pt-3">{props.three}</li>
      </ul>
    </div>
  );
};

export default Vacancy_card;
