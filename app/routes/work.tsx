import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Chris Butera - Portfolio" },
    {
      name: "description",
      content: "Chris Butera Online Portfolio and Work Summary",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      Work content goes here!
    </div>
  );
}
