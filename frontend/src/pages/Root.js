import { Outlet } from "react-router-dom";
import MainNavigtation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigtation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
