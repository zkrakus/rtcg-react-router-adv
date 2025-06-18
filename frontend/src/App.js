// Challenge / Exercise

import EditEventPage from "./pages/EditEvent";
import EventDetailPage from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoots";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/> ,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            path: "",
            element: <EventsPage />,
            loader: eventsLoader
          },
          {
            path: ":eventId",
            element: <EventDetailPage />,
          },
          { path: ":eventId/edit", element: <EditEventPage /> },
          { path: "new", element: <NewEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
