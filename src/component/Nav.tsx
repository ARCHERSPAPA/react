import styled from "styled-components";
import {
  Link, NavLink
}
  from "react-router-dom";
import {Icons} from 'component/icons';
import {useState} from 'react';
import * as React from 'react';


const MyNav = styled.div`
  width: 100%;
  > ul {
    display: flex;
    text-align: center;
    
    li{
      flex-grow: 1;
      padding: 10px;
      background: white;
      >a{
           display: flex;
      flex-direction: column;
      align-items: center;
      &.selected{
            .icon{
           fill:red ;
      }
      color: red;
      }
      }
   
      svg{
      height: 20px;
      width: 20px;
      }
    }
  }
`;
const Nav = () => {
  const [currentTab, setTab] = useState<string>('tab');
  const checkTab = (tab: string) => {
    console.log(tab);
    setTab(tab);
  };
  return (
    <MyNav>
      <ul>
        <li onClick={() => checkTab('tab')}>
          <NavLink to="/tabs" activeClassName="selected">
            <Icons name={'tab'} />
            标签</NavLink>
        </li>
        <li onClick={() => checkTab('my')}>
          <NavLink to="/tongji" activeClassName="selected">
            <Icons name={'my'} />
            统计</NavLink>
        </li>
        <li onClick={() => checkTab('history')}>
          <NavLink to="/jizhang" activeClassName="selected">
            <Icons name={'history'}/>
            记账</NavLink>
        </li>
      </ul>
    </MyNav>
  );
};
export default Nav;