import { useLoaderData } from "react-router-dom";

function Settings() {

    const data: any = useLoaderData();

    return (
      <div className="h-screen">
        <h1 className="text-3xl">Settings</h1>
        <p>{data}</p>
      </div>
    )
  }
  
  export default Settings;