import marathon from "../assets/images/about/marathon.png";
import binghamton from "../assets/images/about/binghamton.png";
import gr from "../assets/images/about/gr.svg";

import mets from "../assets/images/about/mets.png";
import giants from "../assets/images/about/giants.svg";
import islanders from "../assets/images/about/islanders.png";
import bethpage from "../assets/images/about/bethpage2.png";

import LogoGallery from "./logoGallery";

const logos = [
  { src: marathon, alt: "Marathon logo", aspect: "[753/756]" },
  { src: binghamton, alt: "Binghamton logo", aspect: "square" },
  { src: bethpage, alt: "Bethpage Black logo", aspect: "[490/182]" },

  { src: mets, alt: "Mets logo", aspect: "square" },
  { src: giants, alt: "Giants logo", aspect: "[193/150]" },

  { src: gr, alt: "GR logo", aspect: "[143/73]" },
];

export default function aboutLogos() {
  return <LogoGallery logos={logos} />;
}
