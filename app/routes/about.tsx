import type { MetaFunction } from "@remix-run/node";

import AboutLogos from "../components/aboutLogos";

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

      <AboutLogos />

      <section className="mt-16">
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
          languages such as C#, C++, Java, and Assembly, and studied topics
          including operating systems, algorithms, cyber security, and
          networking.
        </p>

        <p>
          Throughout my career, I&apos;ve had the privilege of designing,
          developing, and leading projects for notable companies like Publishers
          Clearing House, Lowe&apos;s Home Improvement, New York Community Bank,
          McComrick, and Random House Publishing, among others. From initial
          concepts to finished products, I&apos;ve collaborated closely with
          teams across design,marketing, and QA to deliver high-performance,
          scalable, and successful projects—all with meticulous attention to
          detail.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll likely find me running, playing
          golf (though I&apos;m far from quitting my day job!), working on and
          racing my GR Corolla, or cheering on the Mets, Giants, and Islanders
          with a nice craft beer in hand.
        </p>
      </section>
    </div>
  );
}
