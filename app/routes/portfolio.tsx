import type { MetaFunction } from "@remix-run/node";

import PortfolioItem from "../components/portfolioItem";
import portfolioItems from "../data/portfolio.json";

export const meta: MetaFunction = () => {
  return [
    { title: "Chris Butera - Portfolio" },
    {
      name: "description",
      content: "Chris Butera Online Portfolio and Work Summary",
    },
  ];
};

export default function Index() {
  return (
    <div className="portfolio-list mx-auto max-w-7xl">
      <h1>Portfolio</h1>
      {portfolioItems.map((item) => (
        <PortfolioItem key={item.title} {...item} />
      ))}
    </div>
  );
}
