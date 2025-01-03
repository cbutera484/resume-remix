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
    <div className="flex">
      {ResumeItems.map((item) => (
        <ResumeItem
          key={item.title}
          {...item}
          location={item.location ?? "N/A"}
        />
      ))}
    </div>
  );
}
