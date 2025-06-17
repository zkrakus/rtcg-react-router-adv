import { Outlet, useNavigation } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";

function EventsRootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <EventsNavigation />
      <main>{navigation.state === "loading" && <p>Loading ...</p>}</main>
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
