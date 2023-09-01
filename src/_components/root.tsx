import {Outlet} from "react-router-dom";
import Nav from "./nav";

export default function Root() {
  return (
    <>
      <div className="bg-gray-900 h-screen flex flex-row w-full">
        <Nav />
        <Outlet />
        </div>
    </>
  );
}