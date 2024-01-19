import axios from "axios";
import {useState} from "react";

function ShortenForm() {
  const [longUrl, setLongUrl] = useState('')
  const [key, setKey] = useState('')

  function handleChange(e) {
    const {id, value} = e.target
    if (id === "longUrl") setLongUrl(value)
    else if (id === "key") setKey(value)
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

    const url = "http://localhost:8080/api/shorten"
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
      <form>
        <label htmlFor="longUrl">Long URL:</label>
        <br/>
        <input type="text" id="longUrl" onChange={handleChange} required/>
        <br/>
        <label htmlFor="key">Short URL Key:</label>
        <br/>
        <input type="text" id="key" onChange={handleChange} required/>
        <br/>
        <button onClick={handleClick}>Submit</button>
      </form>
    </>
  )
}

export default ShortenForm