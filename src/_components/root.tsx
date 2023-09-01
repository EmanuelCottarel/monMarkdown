import {Outlet} from "react-router-dom";
import Nav from "./nav";

export default function Root() {
  return (
    <>
      <h1>Root</h1>
        <Nav />
        <Outlet />
    </>
  );
}