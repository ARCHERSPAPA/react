import styled from "styled-components";
import {
  Link
}
  from "react-router-dom";
import {Icons} from 'component/icons';


const MyNav = styled.div`
  width: 100%;
  > ul {
    display: flex;
    text-align: center;
    li{
      flex-grow: 1;
      padding: 10px;
      background: aqua;
      display: flex;
      flex-direction: column;
      align-items: center;
      svg{
      height: 20px;
      width: 20px;
      }
    }
  }
`;
const Nav = () => {
  return (
    <MyNav>
      <ul>
        <li>
         <Icons name={'tab'}/>
          <Link to="tabs">标签</Link>
        </li>
        <li>
          <Icons name={'my'}/>
          <Link to="/tongji">统计</Link>
        </li>
        <li>
          <Icons name={'history'}/>
          <Link to="/jizhang">记账</Link>
        </li>
      </ul>
    </MyNav>
  );
};
export default Nav;