import type { MetaFunction } from "@remix-run/node";

import GR from "../assets/images/about/gr.jpeg";
import marathon from "../assets/images/about/marathon.jpg";
import selfie from "../assets/images/about/selfie.jpeg";

export const meta: MetaFunction = () => {
  return [
    { title: "Chris Butera - About" },
    { name: "description", content: "About Chris Butera" },
  ];
};

export default function Index() {
  return (
    <div className="max-w-6xl mx-auto text-xl">
      <h1>About Me</h1>
      <section className="mt-16">
        <img
          src={selfie}
          alt="Chris Butera"
          className="opacity-0 w-1/2 md:w-1/4 mx-auto my-4s p-8 pt-0 md:float-right"
          onLoad={(e) => {
            e.currentTarget.classList.add("scale-down-fade-in");
          }}
        />

        <p>
          Hi, I&apos;m Chris! A full-stack developer, car enthusiast, and NYC
          Marathon finisher based in New York, with over 20 years of
          professional experience creating pixel-perfect websites and web
          applications. My passion for the web—and cars—started in high school
          when I launched RapidCars.com, a car enthusiast website showcasing
          high-resolution photos, news, and details about exotic brands like
          Ferrari, Lamborghini, McLaren, and Porsche. The site attracted
          millions of visitors, peaking at 10,000 unique visitors per day, and
          generated over $100,000 in advertising revenue.
        </p>

        <p>
          After high school, I pursued a degree in Computer Science at
          Binghamton University, where I honed my skills in programming
          languages like C#, C++, Java, and Assembly, and studied topics
          including operating systems, algorithms, cybersecurity, and
          networking.
        </p>
        <img
          src={marathon}
          alt="Chris Butera"
          className="opacity-0 w-1/2 md:w-1/4 lg:w-1/4 mx-auto my-4s p-8 pl-0 md:float-left"
          onLoad={(e) => {
            e.currentTarget.classList.add("scale-down-fade-in");
          }}
        />

        <p>
          Throughout my career, I&apos;ve had the privilege of designing,
          developing, and leading projects for notable companies like Publishers
          Clearing House, Lowe&apos;s, and Random House Publishing, among
          others. From initial concepts to finished products, I&apos;ve
          collaborated closely with teams across marketing, design, and QA to
          deliver high-performance, scalable, and successful projects—all with
          meticulous attention to detail.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll likely find me running, playing
          golf (though I&apos;m far from quitting my day job!), working on and
          racing my GR Corolla, or cheering on the Mets, Giants, and Islanders.
        </p>
      </section>
    </div>
  );
}
