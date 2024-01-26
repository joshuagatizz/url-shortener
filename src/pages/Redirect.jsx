import {useParams} from "react-router-dom";
import NotFound from "./NotFound.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

function Redirect() {
  const {key} = useParams()
  const [error, setError] = useState(false);

  const apiUrl = `${import.meta.env.VITE_REACT_APP_API_URL}/redirect/${key}`

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        if (response.data.status === 200) {
          window.location.href = response.data.data.longUrl;
        }
      })
      .catch((e) =>  {
        console.error(e)
        setError(true)
      })
  }, []);

  if (error) {
    return <NotFound/>
  }
  return null
}

export default Redirect