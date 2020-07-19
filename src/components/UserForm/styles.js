import styled from 'styled-components'

export const Form = styled.form`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px; 
  display: block;
  width: 100%;
`
export const Input = styled.input`
  background: lightblue;
  border-radius: 3px;
  color: #001;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`

export const Button = styled.button`
  background: #8d00ff;
  color: #fff;
  padding: 8px 4px;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
 `

 export const Title = styled.h2`
   font-size: 16px;
   font-weight: 500; 
   padding: 8px 0;
 `

 export const Error = styled.span`
    color: red;
    font-size: 14px;
 `
