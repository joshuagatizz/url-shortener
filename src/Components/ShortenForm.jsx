import axios from "axios";
import {useState} from "react";
import TextInputField from "./TextInputField.jsx";

function ShortenForm() {
  const [longUrl, setLongUrl] = useState('')
  const [key, setKey] = useState('')

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

    const url = "https://url-shortener-api-joshuagatizz.vercel.app/api/shorten"
    if (!validateLongUrl(longUrl)) {
      alert("invalid url")
      return
    }
    if (!validateKey(key)) {
      alert("invalid key")
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
              value="https://url-shortener-joshuagatizz.vercel.app"
            />
          </div>
          <div className="w-full">
            <TextInputField
              labelName={"Short URL Key"}
              changeValue={changeKey}
              placeholder="Key to access the URL"
            />
          </div>
        </div>
        <div className="w-fit bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-900 transition duration-300 ease-in-out px-4 py-1 rounded-3xl border border-black">
          <button onClick={handleClick} className="font-sans text-white font-bold text-2xl">Create!</button>
        </div>
      </form>
    </>
  )
}

export default ShortenForm