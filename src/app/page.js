"use client";
import Grandparent from "@/components/Grandparent";

import Home from "@/components/Home";

export default function page() {
  return (
    <>
      <Grandparent />
      {/* <Parent />
      <Child />
      <Grandchild /> */}

      <Home />
    </>
  );
}
