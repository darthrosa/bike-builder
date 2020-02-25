import React from 'react'
import '../reusable/input.css'

export default ({ handleValueChange, value, name, placeHolder, reff = null, charLimit = 60, autoComplete = 'on', type = 'text' }) => {
  const [ focus, setFocus ] = React.useState(false)

  return (
    <div className="tvt-input-container">
      <input
        name={name}
        autoCorrect="off"
        className="tvt-input"
        type={type}
        value={value}
        onChange={handleValueChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        ref={reff}
        maxLength={charLimit}
        autoComplete={autoComplete}
      />
      <span className={`tvt-input-underline ${focus || value ? 'ulfocus' : 'ulnofocus'}`}></span>
      <span className={`tvt-input-placeholder ${focus || value ? 'phfocus' : 'phnofocus'}`}>{placeHolder}</span>
    </div>
  )
}