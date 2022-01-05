import styled from "styled-components";
import {
  Link
} from "react-router-dom";
import x from 'icons/tab.svg';

console.log(x);
const MyNav = styled.div`
  width: 100%;
  > ul {
    display: flex;
    text-align: center;
    li{
      flex-grow: 1;
      padding: 10px;
      background: aqua;
    }
  }
`;
const Nav = () => {
  return (
    <MyNav>
      <ul>
        <li>
          <svg>
            <svg>
              <use xlinkHref="#tab"/>
            </svg>
          </svg>
          <Link to="tabs">标签</Link>
        </li>
        <li>
          <Link to="/tongji">统计</Link>
        </li>
        <li>
          <Link to="/jizhang">记账</Link>
        </li>
      </ul>
    </MyNav>
  );
};
export default Nav;