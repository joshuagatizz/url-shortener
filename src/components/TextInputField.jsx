function TextInputField({labelName, changeValue, placeholder, value ,disabled=false}) {
  function handleChange(e) {
    changeValue(e.target.value)
  }

  return (
    <>
      <div className="my-4">
        <label
          className="text-cyan-500 font-semibold font-sans text-lg"
          htmlFor={labelName}>
          {labelName}:
        </label>
        <input
          className={`${disabled ? 'bg-gray-200': ''} 
                    border-2 border-gray-400 rounded-xl w-full px-2 font-sans`}
          placeholder={placeholder}
          type="text"
          id={labelName}
          onChange={handleChange}
          disabled={disabled}
          value={value}
          required/>
      </div>
    </>
  )
}

export default TextInputField