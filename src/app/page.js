"use client";
import Grandparent from "@/components/Grandparent";

import Note from "@/components/Note";

export default function page() {
  return (
    <>
      <Grandparent />
      {/* <Parent />
      <Child />
      <Grandchild /> */}
      <Note />
    </>
  );
}
