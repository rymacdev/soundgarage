import { useRouteError } from "react-router-dom";

function ErrorPage() {

    const error: any = useRouteError();
    console.error(error);

    return (
      <div>
        <h1 className="text-3xl h-screen">Page not found.</h1>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
      </div>
    )
  }
  
  export default ErrorPage;
  