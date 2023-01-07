import React from 'react'

function MySelect({option, value, defaultValue, onChange}) {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
        {defaultValue ? <option value=''>{defaultValue}</option> : ""}
        {option.map(item => <option key={item.value} value={item.value}>{item.name}</option>)}
    </select>
  )
}

export default MySelect