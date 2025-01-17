import type { MetaFunction } from "@remix-run/node";
import laptopGadgets2 from "../assets/images/home/laptop-gadgets2.png";

import TechLogos from "~/components/techLogos";

export const meta: MetaFunction = () => {
  return [
    { title: "Chris Butera - Senior Full-Stack Engineer" },
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
  "Tailwind CSS",
  "Storybook",
  "Vite",
  "Webpack",
  "PHP",
  "Laravel",
  "WordPress, Joomla!, and Drupal",
];

export default function Index() {
  return (
    <div className="max-w-6xl mx-auto text-xl">
      <h1 className="mx-auto text-center">Senior Full-Stack Engineer</h1>

      <img
        src={laptopGadgets2}
        alt="Chris Butera"
        className="opacity-0 md:w-3/4 lg:w-1/2 mx-auto my-4 aspect-[1040/903]"
        onLoad={(e) => {
          e.currentTarget.classList.add("scale-down-fade-in");
        }}
      />
      <div className="hidden md:block">
        <TechLogos />
      </div>
      <p>
        Full Stack Engineer specializing in front-end technologies based in New
        York with 20 years professional experience building highly scalable,
        award winning websites.
      </p>

      {/* <h3 className="mt-12">My current toolset includes:</h3>
      <ul className="list-disc ml-8 pl-4 text-base md:text-xl">
        {TOOLSET.map((tool) => (
          <li className="mt-4" key={tool}>
            {tool}
          </li>
        ))}
      </ul> */}
      <p className="mt-12">
        This site was built on{" "}
        <a rel="noopener noreferrer" target="blank" href="https://remix.run/">
          Remix.
        </a>{" "}
        Check out the code on{" "}
        <a
          rel="noopener noreferrer"
          target="blank"
          href="https://github.com/cbutera484/resume-remix"
        >
          GitHub.
        </a>
      </p>
      <div className="block md:hidden mt-16">
        <TechLogos />
      </div>
    </div>
  );
}
