import styled from 'styled-components';
import Nav from 'component/Nav';
const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Content = styled.div`
  flex-grow: 1`;
const Layout=(props:any)=>{
  return <Wraper>
        <Content>
          {props.children}
        </Content>
       <Nav/>
      </Wraper>;
}
export  default  Layout