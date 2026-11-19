"use client";

import { use } from "react";

export default function Lecture({ params }) {
  const { lecture } = use(params);

  return (
    <div>
      <h1>Lectures hai yaha per</h1>
      <h2>Lecture ID: {lecture}</h2>
    </div>
  );
}