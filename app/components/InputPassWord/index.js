import React, { useState } from 'react'
import styled from 'styled-components'
import { SlEye } from 'react-icons/sl'
import { RxEyeClosed } from 'react-icons/rx'
function InputPassword({name, icon, placeholder, onChange, required = true, ...other}) {
  const [showEye, setShowEye] = useState(true);

  const toggleShow = () => {
    setShowEye(!showEye);
  }
  return (
    <Wrapper className="flex items-center gap-3">
      {icon}
      <input {...other} type={showEye? "password": "text"} name={name} onChange={onChange} required={required} placeholder={placeholder} className="c-input" />
      {showEye?
        <SlEye className="text-xl" onClick={toggleShow} />
      : <RxEyeClosed className="text-xl" onClick={toggleShow} />
    }
  
    </Wrapper>
  )
}

export default InputPassword

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