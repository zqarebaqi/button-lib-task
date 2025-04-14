"use client";
import React from "react";
import { Button } from "btn-lib";
export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Welcome to My Next.js App</h1>
      <Button
        label="Click Me!"
        primary={true}
        size="large"
        onClick={() => alert("Button clicked!")}
      />
      <Button
        label="Secondary Button"
        primary={false}
        size="medium"
        backgroundColor="#ff6347"
      />
    </main>
  );
}
