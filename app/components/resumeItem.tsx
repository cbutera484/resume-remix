import React from "react";

interface ResumeItemProps {
  title: string;
  location: string;
  position: string;
  year: string;
  description: string;
  logo: string;
  technology: string;
}

const ResumeItem: React.FC<ResumeItemProps> = ({
  title,
  location,
  position,
  year,
  description,
  logo,
  technology,
}) => {
  return (
    <div className="resume-item">
      <img
        src={`/images/resume/logos/${logo}`}
        alt={`${title} logo`}
        className="resume-item-logo"
      />
      <div className="resume-item-content">
        <h2>{title}</h2>
        <h3>{position}</h3>
        <p>{location}</p>
        <p>{year}</p>
        <p>{description}</p>
        <p>{technology}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
