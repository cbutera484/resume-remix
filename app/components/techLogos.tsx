import vue from "../assets/images/vue.png";
import react from "../assets/images/react.png";
import htmlcss from "../assets/images/htmlcss.png";
import node from "../assets/images/node.png";
import laravel from "../assets/images/laravel.png";

const logos = [{ src: react, alt: "React logo", aspect: "[1503/1350]" }, { src: vue, alt: "Vue.js logo", aspect: "square" },  { src: node, alt: "Node JS logo", aspect:"square" }, { src: htmlcss, alt: "HTML5 and CSS3 logos", aspect: "[600/142]" },  { src: laravel, alt: "laravel logo", aspect: "square" }];


export default function TechLogos() {
  return (
<div className="grid logos items-center place-items-center  justify-around  grid-rows-3 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-8   mt-8 mb-12">
   { logos.map((logo, index) => (
      <img
        key={index}
        src={logo.src}
        alt={logo.alt}
        className={`opacity-0 md:w-fit h-32 aspect-${logo.aspect}`}
        style={{ animationDelay: `${200 * (index + 1)}ms` }}
        onLoad={(e) => {e.currentTarget.classList.add('scale-up-fade-in')}}
      />
    ))}
   </div>
  )
}

