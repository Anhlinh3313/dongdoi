import React from 'react'
import styled from 'styled-components'

function InputText({name, value, icon, placeholder, onChange, required = true, type ="text"}) {
  return (
    <Wrapper className="flex items-center gap-3">
      {icon}
      <input value={value} type={type} name={name} onChange={onChange} required={required} placeholder={placeholder} className="c-input" />
    </Wrapper>
  )
}

export default InputText

const Wrapper = styled.div`
    position: relative;
    border-radius: 4px;
    background-color: #fff;
    border: solid 1px #ccc;
    width: 100%;
    padding: 0 8px;
    .c-input {
      border-radius: 4px;
      line-height: 42px;
      width: auto;
      border-style: none;
      height: 42px;
      background: #fff;
      outline: none;
      width: 100%;
      font-weight: 500;
      &::placeholder {
        color: #333;
        font-size: 16px;
      }
    }
`;