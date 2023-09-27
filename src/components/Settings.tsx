import { useOutletContext } from "react-router-dom";
import { Songs } from "./shared/Layout";

function Settings() {

    // const data: any = useLoaderData();

    const data: Songs = useOutletContext();

    console.log(data)

    function SongsList() {
      return (
        <ul>
          {data.map((song, key) => (
            <li key={key}>{song.title}</li>
          ))}
        </ul>
      )
    }

    return (
      <div className="h-screen">
        <h1 className="text-3xl">Settings</h1>
        <ul>
          <SongsList />
        </ul>
      </div>
    )
  }
  
  export default Settings;