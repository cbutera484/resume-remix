import type { MetaFunction } from "@remix-run/node";
import ResumeItems from "../data/resume.json";

import ResumeItem from "~/components/resumeItem";

export const meta: MetaFunction = () => {
  return [
    { title: "Chris Butera - Resume" },
    { name: "description", content: "Chris Butera's Resume" },
  ];
};

export default function Index() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1>Resume</h1>
      {ResumeItems.map((item) => (
        <ResumeItem key={item.title} {...item} location={item.location ?? ""} />
      ))}
    </div>
  );
}
