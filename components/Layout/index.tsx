// @/components/Layout/index.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { MyTable } from "../Table";

export default function Layout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="h-screen bg-[#E7EBF6]">
      <div className="flex">
        <Sidebar show={showSidebar} setter={setShowSidebar} />
        <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
          <MyTable setter={setShowSidebar} />
        </div>
      </div>
    </div>
  );
}