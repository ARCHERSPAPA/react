import styled from 'styled-components';

const Number = styled.div`
  &::after {
    display: block;
    content: "";
    clear: both;
  }
button{
width: 25%;
float: left;
height: 64px;
&:nth-child(1),&:nth-child(3),&:nth-child(2){

}
&.ok{
float: right;
height: 128px;
}
}

`;
const number = () => {
  return (
    <Number>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className={'ok'}>完成</button>
      <button>.</button>
      <button>0</button>
      <button>x</button>
    </Number>
  );
};
export default number;