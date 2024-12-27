import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Chris Butera - Contact" },
    { name: "description", content: "Contact Chris Butera" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      Contact content goes here!
    </div>
  );
}
