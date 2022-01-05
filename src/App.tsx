import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import  HomePage from './pages/home';
import Nav from './component/Nav';

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Content = styled.div`
  flex-grow: 1`;
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tabs">
          <About/>
        </Route>
        <Route path="/tongji">
          <Users/>
        </Route>
        <Route path="/jizhang">
          <HomePage/>
        </Route>
        <Redirect exact from={'/'} to={'/tabs'}></Redirect>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

function NoMatch() {
  return <div>baichi这都输错了</div>;
}

// function Home() {
//   return <Wraper>
//     <Content>
//       <h2>Home</h2>
//     </Content>
//     <Nav/>
//   </Wraper>;
// }

function About() {
  return <Wraper>
    <Content>
      <h2>o</h2>
    </Content>
    <Nav/>
  </Wraper>;
}

function Users() {
  return <Wraper>
    <Content>
      <h2>Hi</h2>
    </Content>
    <Nav/>
  </Wraper>;
}
