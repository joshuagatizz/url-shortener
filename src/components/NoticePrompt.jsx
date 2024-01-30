function NoticePrompt({message = "", url=""}) {
  return(
    <>
      <p className="mt-4 text-cyan-500 font-semibold text-xl">
        {message}
      </p>
      <a href={url} target="_blank" rel="noopener noreferrer"
         className="text-center underline-offset-2 underline text-cyan-800 font-semibold">
        {url}
      </a>
    </>
  )
}

export default NoticePrompt