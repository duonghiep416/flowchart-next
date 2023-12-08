"use client";
import { ReactFlowProvider } from "reactflow";
import { Metadata } from "next";
import Flowchart from "./component/Flowchart/Flowchart";
import Header from "./component/Header/Header";
import { NextUIProvider } from "@nextui-org/react";

// export const metadata: Metadata = {
//   title: "Flowchart",
//   description: "Flowchart",
//   // other metadata
// };
export default function page() {
  return (
    <NextUIProvider>
      <div className="relative mx-auto mt-22 max-w-c-1390 px-4  md:px-8 2xl:px-0">
        <Header />
        <ReactFlowProvider>
          <Flowchart />
        </ReactFlowProvider>
      </div>
    </NextUIProvider>
  );
}
