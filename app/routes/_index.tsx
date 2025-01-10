import type { MetaFunction } from "@remix-run/node";
import laptopGadgets2 from "../assets/images/home/laptop-gadgets2.png";

import TechLogos from "~/components/techLogos";

export const meta: MetaFunction = () => {
  return [
    { title: "Chris Butera - Senior Full Stack Engineer" },
    {
      name: "description",
      content:
        "Full Stack Developer with 20 years of professional experience, specializing in front-end development and leading new project initiatives from concept through implementation.",
    },
  ];
};

const TOOLSET = [
  "React",
  "Vue",
  "Svelte",
  "Node JS",
  "HTML/CSS/JavaScript",
  "Vite",
  "Webpack",
  "PHP (Laravel)",
  "Wordpress, Joomla!, and Drupal",
];

export default function Index() {
  return (
    <div className="max-w-5xl mx-auto text-xl">
      <h1 className="mx-auto text-center">
        Senior Full Stack Engineer
      </h1>
      <img
        src={laptopGadgets2}
        alt="Chris Butera"
        className="w-2/3 mx-auto my-4"
      />
      <div className="hidden md:block">
        <TechLogos />
      </div>
      <p>
        Full Stack Engineer specializing in front-end technologies based in New
        York with almost 20 years professional experience building highly
        scalable, award winning websites.
      </p>

      <h3 className="mt-12">My current toolset includes:</h3>
      <ul className="list-disc ml-8 pl-4">
        {TOOLSET.map((tool) => (
          <li className="mt-4" key={tool}>
            {tool}
          </li>
        ))}
      </ul>
      <p className="mt-12">Check out the code for this site on <a rel="noopener noreferrer" target="blank" href="https://github.com/cbutera484/resume-remix">GitHub</a></p>
      <div className="block md:hidden mt-16">
        <TechLogos />
      </div>
    </div>
  );
}
