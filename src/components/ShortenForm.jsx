import axios from "axios";
import {useState} from "react";
import TextInputField from "./TextInputField.jsx";

function ShortenForm() {
  const [longUrl, setLongUrl] = useState('')
  const [key, setKey] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function changeKey(value) {
    setKey(value)
  }
  function changeLongUrl(value) {
    setLongUrl(value)
  }

  function validateLongUrl(url) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/
    return urlRegex.test(url)
  }
  function validateKey(key) {
    const keyRegex = /^[a-zA-Z\d-]+$/
    return keyRegex.test(key)
  }
  async function handleClick(e) {
    e.preventDefault()
    setIsLoading(true)

    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/shorten`
    if (!validateLongUrl(longUrl)) {
      alert("invalid url")
      setIsLoading(false)
      return
    }
    if (!validateKey(key)) {
      alert("invalid key")
      setIsLoading(false)
      return
    }
    const request = JSON.stringify({
      "longUrl": longUrl,
      "key": key
    })
    try {
      const response = await axios.post(url, request, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.status === 200) alert('success!')
    } catch (e) {
      alert('failed')
      console.log("error:", e)
    }
    setIsLoading(false)
  }

  return (
    <>
      <form className="w-full">
        <TextInputField
          labelName={"Long URL"}
          changeValue={changeLongUrl}
          placeholder="URL to shorten"
        />

        <div className="flex">
          <div className="w-96 mr-2">
            <TextInputField
              labelName={"Domain"}
              changeValue={changeKey}
              disabled={true}
              value={`${import.meta.env.VITE_REACT_APP_URL}`}
            />
          </div>
          <div className="w-full">
            <TextInputField
              labelName={"Key"}
              changeValue={changeKey}
              placeholder="URL Key"
            />
          </div>
        </div>
        <div
          className={`${isLoading ? 'bg-gray-400 cursor-not-allowed' : 
                        'bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-900 cursor-pointer'} 
                      w-fit cursor-pointer
                      transition duration-300 ease-in-out
                      px-4 py-1 rounded-3xl border border-black
                      font-sans text-white font-bold text-2xl`}>
          <button
            onClick={handleClick}
            disabled={isLoading}
            >
            Create!
          </button>
        </div>
      </form>
    </>
  )
}

export default ShortenForm