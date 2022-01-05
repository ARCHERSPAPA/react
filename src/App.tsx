import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
 Redirect
} from "react-router-dom";
import styled from "styled-components";

import Nav from './component/Nav'
const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const Content = styled.div`
  flex-grow: 1`
export default function App() {
    return (
        <Router>
            <Wraper>
                <Content>
                    <Switch>
                        <Route path="/tabs">
                            <About/>
                        </Route>
                        <Route path="/tongji">
                            <Users/>
                        </Route>
                        <Route path="/jizhang">
                            <Home/>
                        </Route>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                        <Redirect from={'/'} to={'/tabs'}></Redirect>
                    </Switch>
                </Content>
                <Nav/>
            </Wraper>
        </Router>
    );
}

function NoMatch() {
    return <div>baichi这都输错了</div>
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
