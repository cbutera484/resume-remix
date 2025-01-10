import vue from "../assets/images/vue.png";
import react from "../assets/images/react.png";
import html5 from "../assets/images/html.png";
import css3 from "../assets/images/css.png";
import htmlcss from "../assets/images/htmlcss.png";
import node from "../assets/images/node.png";
import laravel from "../assets/images/laravel.png";

export default function TechLogos() {
  return (
    <div className="grid logos items-center place-items-center  justify-around  grid-rows-3 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-8   mt-8 mb-12">
      <img src={react} alt="React logo" className="md:w-fit h-32" />
      <img src={vue} alt="Vue.js logo" className="md:w-fit h-32" />
      <img src={node} alt="JavaScript logo" className="md:w-fit h-32" />
      <img src={htmlcss} alt="HTML5 and CSS3 logos" className="md:w-fit h-32" />
{/* 
      <img src={html5} alt="HTML5 logo" className="md:w-fit h-32" />
      <img src={css3} alt="CSS3 logo" className="md:w-fit h-32" /> */}
      <img src={laravel} alt="laravel logo" className="md:w-fit h-32" />
    </div>
  );
}
