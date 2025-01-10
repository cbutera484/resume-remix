import React from "react";

interface PortfolioItemProps {
  logo: string;
  title: string;
  description: string;
  platforms: string;
  technology: string;
  url: string;
  git?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  logo,
  title,
  description,
  platforms,
  technology,
  url,
  git,
}) => (
  <div className="portfolio-item place-content-center mt-14 w-full mx-auto lg:flex gap-24 mb-16 lg:mb-28">
    <div className="portfolio-item-image flex items-center lg:w-6/12 text-center">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-100"
      >
        <img
          className="border-black border resume-item-logo w-full max-full mx-auto hover:scale-105 transition-transform"
          src={`/images/portfolio/${logo}`}
          alt={title}
        />
      </a>
    </div>
    <div className="portfolio-item-content flex flex-col place-content-center mt-2 lg:mt-0 lg:w-6/12">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Platforms:</strong> {platforms}
      </p>
      <p>
        <strong>Technology:</strong> {technology}
      </p>
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </p>
      {git && (
        <p>
          <a href={git} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </p>
      )}
    </div>
  </div>
);

export default PortfolioItem;
