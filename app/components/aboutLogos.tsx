import marathon from "../assets/images/about/marathon.png";
import binghamton from "../assets/images/about/binghamton.png";
import gr from "../assets/images/about/gr.svg";

import mets from "../assets/images/about/mets.png";
import giants from "../assets/images/about/giants.svg";
import islanders from "../assets/images/about/islanders.png";

const logos = [
  { src: marathon, alt: "Marathon logo", aspect: "[753/756]" },
  { src: binghamton, alt: "Binghamton logo", aspect: "square" },
  { src: mets, alt: "Mets logo", aspect: "square" },
  { src: giants, alt: "Giants logo", aspect: "[193/150]" },
  { src: islanders, alt: "Islanders logo", aspect: "square" },
  { src: gr, alt: "GR logo", aspect: "[143/73]" },
];

export default function aboutLogos() {
  return (
    <div className="grid logos items-center place-items-center  justify-around  grid-rows-3 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-8 mt-16 mb-12">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className={`opacity-0 md:w-fit h-32 aspect-${logo.aspect}`}
          style={{ animationDelay: `${200 * (index + 1)}ms` }}
          onLoad={(e) => {
            e.currentTarget.classList.add("scale-up-fade-in");
          }}
        />
      ))}
    </div>
  );
}
