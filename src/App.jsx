import ShortenForm from "./Components/ShortenForm.jsx";
import "./index.css"

function App() {
  return (
    <>
      <div className="main-content border-2 rounded-xl p-4">
        <h1 className="text-3xl font-bold font-sans my-4 text-cyan-800">URL Shortener</h1>
        <ShortenForm/>
      </div>
    </>
  )
}

export default App
