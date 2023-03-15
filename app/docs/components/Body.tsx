import Link from "next/link";
import React from "react";
import DocCode from "./DocCode";

export interface Docs {
  title: string;
  description1: string;
  code1: string;
  description2: string|null;
  code2: string|null;
  last?: boolean;
}

export const API_DOCS: Docs[] = [
  {
    title: "Random Super Set",
    description1: "Get one random super set",
    code1: `fetch("https://workout-api.vercel.app/api/random")
          .then((response) => response.json())
          .then((quote) => console.log(quote));`,
    description2: "Get one random super set by mentioning a specific amount to of workouts to be included",
    code2: `fetch("https://workout-api.vercel.app/api/random?amount=8")
          .then((response) => response.json())
          .then((quote) => console.log(quote));`,
  },
  {
    title: "Available Workouts",
    description1: "Get all available workouts",
    code1: `fetch("https://workout-api.vercel.app/api/list")
          .then((response) => response.json())
          .then((quote) => console.log(quote));`,
    description2: null,
    code2: null,
    last: true,
  },
];

function Body() {
  return (
    <div
      className="container relative max-w-4xl px-2 py-16 lg:mx-auto"
      id="get-started"
    >
      <h1 className="text-4xl font-bold">Docs</h1>
      <h2 className="my-5 text-lg">
        Below you'll find examples using{" "}
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          target={"_blank"}
          className="text-rose-500 underline"
        >
          Fetch API
        </Link>{" "}
        but you can use any other http library out there.
      </h2>
      <div className="my-10 relative">
        <h3 className="text-2xl font-bold mb-4">Important Notes</h3>
        <ol className="list-disc list-inside lg:text-lg text-base">
          <li>
            Default rate limit is <i className="font-medium">100 requests</i>{" "}
            per hour.
          </li>
          <li>
            Default number of randomly generated super sets from random endpoint is{" "}
            <i className="font-medium">8</i>.
          </li>
        </ol>
      </div>
      <hr className="mb-5" />
      <div className="my-12 space-y-12">
        {API_DOCS.map((doc) => (
          <DocCode {...doc} key={doc.title} />
        ))}
      </div>
    </div>
  );
}

export default Body;