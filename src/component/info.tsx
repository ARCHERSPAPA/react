import styled from 'styled-components';

const Info=styled.div`
padding: 20px 6px;
background: #E5E5E5;
input{
outline: none;
border: none;
background: #E5E5E5;
}          
`
const info=()=>{
  return (
    <Info>
      <span>备注：</span><input placeholder={'请输入备注'}/>
    </Info>
  )
}
export  default  info