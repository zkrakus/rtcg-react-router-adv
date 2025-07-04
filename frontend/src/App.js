// Challenge / Exercise

import EditEventPage from "./pages/EditEvent";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from "./pages/EventDetail";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import { action as maniuplateEventAction } from './components/EventForm'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoots";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: 'event-detail',
            loader: eventDetailLoader,
            action: deleteEventAction,
            children: [
              {
                index: true,
                element: <EventDetailPage />
              },
              { path: "edit", element: <EditEventPage />, action: maniuplateEventAction },
            ],
          },
          { path: "new", element: <NewEventPage />, action: maniuplateEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
