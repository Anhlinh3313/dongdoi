import React from 'react'
import styled from 'styled-components'
function Button({title, onClick = () => {}, type ="", className}) {
  return (
    <Wrapper type={type} onClick={onClick} className={className}>
      {title}
    </Wrapper>
  )
}

export default Button;

const Wrapper = styled.button`
  width: 100%;
  height: 42px;
  background: #307b06;
  color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.type2 {
    border-color: #ccc;
    color: #333;
    cursor: pointer;
    font-size: 12px;
    background: #f7f7f7;
    font-weight: 500;
    background: -o-linear-gradient(top, #ffffff, #f7f7f7);
    background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#f7f7f7));
    background: linear-gradient(to bottom, #ffffff, #f7f7f7);
    box-shadow: 2px 2px 0 rgb(0 0 0 / 6%);
  }
`;