import ShortenForm from "../components/ShortenForm.jsx";

function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen p-4">
        <div className="border-2 rounded-xl p-8 w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-cyan-800 mb-4">URL Shortener</h1>
          <ShortenForm/>
        </div>
      </div>
    </>
  )
}

export default Home