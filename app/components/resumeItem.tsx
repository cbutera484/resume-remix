import React from "react";

interface ResumeItemProps {
  title: string;
  location: string;
  position: string;
  year: string;
  description: string;
  logo: string;
  technology: string;
  logoWidth: number;
  logoHeight: number;
}

const ResumeItem: React.FC<ResumeItemProps> = ({
  title,
  location,
  position,
  year,
  description,
  logo,
  technology,
  logoWidth,
  logoHeight,
}) => {
  return (
    <div className="w-full resume-item place-content-center mx-auto resume-item lg:flex gap-8 mt-12 mb-24 lg:mb-28 ">
      <div className="resume-item-image flex items-center lg:w-6/12 text-center">
        <img
          src={`/images/resume/logos/${logo}`}
          loading="lazy"
          alt={`${title} logo`}
          className={`opacity-0 resume-item-logo w-1/2 lg:w-80 lg:max-h-80 mx-auto rounded-3xl aspect-[${logoWidth}/${logoHeight}]`}
          onLoad={(e) => {
            e.currentTarget.classList.add("scale-down-fade-in");
          }}
        />
      </div>
      <div className="resume-item-content flex flex-col place-content-center mt-6 lg:mt-0 lg:w-6/12">
        <h2>{title}</h2>
        <h3>{position}</h3>
        <h4>{location}</h4>
        <h5>{year}</h5>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <p className="text-lg">
          <strong>Skills: </strong>
          <strong>{technology}</strong>
        </p>
      </div>
    </div>
  );
};

export default ResumeItem;
