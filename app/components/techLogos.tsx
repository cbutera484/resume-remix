import vue from "../assets/images/vue.png";
import react from "../assets/images/react.png";
import htmlcss from "../assets/images/htmlcss.png";
import node from "../assets/images/node.png";
import laravel from "../assets/images/laravel.png";
import LogoGallery from "./logoGallery";

const logos = [
  { src: react, alt: "React logo", aspect: "[1503/1350]" },
  { src: vue, alt: "Vue.js logo", aspect: "square" },
  { src: node, alt: "Node JS logo", aspect: "square" },
  { src: htmlcss, alt: "HTML5 and CSS3 logos", aspect: "[600/142]" },
  { src: laravel, alt: "laravel logo", aspect: "square" },
];

export default function techLogos() {
  return <LogoGallery logos={logos} />;
}
