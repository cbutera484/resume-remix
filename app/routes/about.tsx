import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Chris Butera - About" },
    { name: "description", content: "About Chris Butera" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      About content goes here!
    </div>
  );
}
