import {HeadTabs} from 'component/headTabs';
import Layout from 'component/layout';
import Info from 'component/info';
import Number from 'component/number';
import styled from 'styled-components';

const Warp = styled(Layout)`
display: flex;
flex-direction: column;
border: 1px solid red;
`;
const homePage = () => {
  return (
    <Warp>
      <HeadTabs></HeadTabs>
      <Info></Info>
      <Number></Number>
    </Warp>
  );
};
export default homePage;