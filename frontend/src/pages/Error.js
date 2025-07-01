import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "something went wrong!";

  console.log(error);

  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title="An error occured!">
        <p>Something went wrong!</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
