import { useState } from "react";

function NoticePrompt({ message = "", url = "" }) {
  const [copyStatus, setCopyStatus] = useState(false);

  async function handleCopy(e) {
    e.preventDefault();
    await navigator.clipboard.writeText(url);
    setCopyStatus(true);
  }

  return (
    <>
      <p className="mt-4 text-cyan-500 font-semibold text-xl text-center">
        {message}
      </p>
      <div className="flex mt-2 items-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center underline-offset-2 underline text-cyan-800 font-semibold flex-grow"
        >
          {url}
        </a>
        {url !== "" && (
          <button onClick={handleCopy} className="ml-4">
            {copyStatus ? (
              <img src="/public/checkmark.svg" width="30" height="30" alt="checkmark" />
            ) : (
              <img
                width="30"
                height="30"
                src="/public/copy.png"
                alt="copy--v1"
              />
            )}
          </button>
        )}
      </div>
    </>
  );
}

export default NoticePrompt;