import type { MetaFunction } from "@remix-run/node";
import headshot from "../assets/images/headshot.jpg";
import vue from "../assets/images/vue.png";
import react from "../assets/images/react.png";
import html5 from "../assets/images/html.png";
import css3 from "../assets/images/css.png";
import js from "../assets/images/js.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Chris Butera - Senior Full Stack Engineer" },
    {
      name: "description",
      content:
        "Full Stack Developer with 18+ years of experience, specializing in front-end development and leading new project initiatives from concept through implementation.",
    },
  ];
};

const TOOLSET = [
  "React",
  "Vue",
  "Svelte",
  "Node",
  "HTML5/CSS3",
  "Vite",
  "Webpack",
  "PHP (Laravel)",
  "Joomla, Wordpress, and Drupal",
];

export default function Index() {
  return (
    <div className="max-w-5xl mx-auto text-xl">
      <h2 className="mx-auto text-center text-4xl">
        Senior Full Stack Engineer
      </h2>
      <img
        src={headshot}
        alt="Chris Butera"
        className="w-48 h-48 mx-auto rounded-full my-16"
      />

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

      <div className="logos flex gap-16 items-center justify-between my-16 flex-wrap">
        <img src={react} alt="React logo" className="w-fit h-32" />
        <img src={vue} alt="Vue.js logo" className="w-fit h-32" />
        <img src={js} alt="JavaScript logo" className="w-fit h-32" />

        <img src={html5} alt="HTML5 logo" className="w-fit h-32" />
        <img src={css3} alt="CSS3 logo" className="w-fit h-32" />
      </div>
    </div>
  );
}
