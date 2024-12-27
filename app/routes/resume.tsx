import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Chris Butera - Resume" },
    { name: "description", content: "Chris Butera's Resume" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      Resume content goes here!
    </div>
  );
}
