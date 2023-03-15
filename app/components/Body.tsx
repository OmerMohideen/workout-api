"use client";
import React from 'react'
import CodeSnap from "./CodeSnap";
import { MouseEvent, useState } from "react";
import SpinnerSVG from '../svg/SpinnerSVG';
import stringifyObject from "stringify-object";

type Quote = {
  author: string;
  quote: string;
}

function Body() {
  const code = `fetch('https://workout-api.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote))`;
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState<number>(0);
  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setClickCount(clickCount + 1);
    setRandomQuote(null);
    setIsLoading(true);

    await fetch("/api/random")
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        setRandomQuote(json);
      });
  };
  
  return (
    <div className="container relative max-w-4xl px-2 py-16 lg:mx-auto" id="get-started">
        <h1 className="text-4xl font-bold">Try it</h1>
        <h2 className="my-5 text-lg">Run this code to get a random quote</h2>
        <CodeSnap snippet={code} language="javascript" />
        <button
          className="inline-flex items-center bg-rose-600 hover:bg-rose-500 text-white active:bg-rose-700 font-bold uppercase text-xs px-4 py-3
        rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 my-8"
          type="button"
          disabled={isLoading}
          style={{ transition: "all .15s ease" }}
          onClick={(e) => handleClick(e)}
        >
          {isLoading && <SpinnerSVG />}
          Run script
        </button>
        <CodeSnap
          snippet={stringifyObject(randomQuote)}
          language="javascript"
        />
        {randomQuote && (
          <p className="mt-3 text-md">
            Here is {clickCount > 1 ? "another" : "a"} randomly generated super set 😃 🎉
          </p>
        )}
      </div>
  )
}

export default Body