"use client";

import { useEffect, useState } from "react";

// Renders the build year, then updates to the visitor's current year.
export default function Year() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span>{year}</span>;
}
