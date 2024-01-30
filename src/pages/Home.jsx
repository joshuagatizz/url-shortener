import ShortenForm from "../components/ShortenForm.jsx";
import NoticePrompt from "../components/NoticePrompt.jsx";
import {useState} from "react";

function Home() {
  const [notice, setNotice] = useState("")
  const [url, setUrl] = useState("")

  function changeNotice(m) {
    setNotice(m)
  }

  function changeUrl(m) {
    setUrl(m)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <div className="border-2 rounded-xl p-8 w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-cyan-800 mb-4">URL Shortener</h1>
          <ShortenForm changeNotice={changeNotice} changeUrl={changeUrl}/>
        </div>
        <NoticePrompt message={notice} url={url}/>
      </div>
    </>
  )
}

export default Home