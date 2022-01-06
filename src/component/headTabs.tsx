import styled from 'styled-components';
import {useState} from 'react';

const Tabs = styled.div`
padding: 16px;
flex-grow: 1;
ul{
display: flex;
flex-wrap: wrap;
height: 100px;
li{
background: #D9D9D9;
height: 22px;
border-radius: 18px;
margin-right: 18px;
color: #484848;
padding: 1px 18px;
}
}
button{
border: none;
font-family: Source Han Sans;
margin-top: 47px;
background: none;
border-bottom: 1px solid #999999;
padding-bottom: 4px;
color: #999999;
text-decoration: #999999;
}
`;
type Props = {}
const HeadTabs: React.FC = (props: Props) => {
  const [tabs, setTabs] = useState<string[]>(['吃', '喝', '玩', '乐']);
  const addTabs = () => {
    let tab = window.prompt('请输入你的tab');
    if (tab) {
      setTabs([...tabs, tab]);
    }
  };
  return (
    <Tabs>
      <ul>
        {tabs.map(tag => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
      <button onClick={() => addTabs()}>新增标签</button>
    </Tabs>
  );
};
export {HeadTabs};