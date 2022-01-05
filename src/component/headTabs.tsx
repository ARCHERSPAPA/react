import styled from 'styled-components';
import {useState} from 'react';

const Tabs = styled.div`

`;
type Props = {}
const HeadTabs: React.FC = (props: Props) => {
  const [tabs, setTabs] = useState<string[]>(['吃', '喝', '玩', '乐']);
  const addTabs=()=>{
    let tab=window.prompt('请输入你的tab');
    if(tab){
      setTabs([...tabs,tab])
    }
  }
  return (
    <Tabs>
      <ul>
        {tabs.map(tag => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
      <button onClick={()=>addTabs()}>add</button>
    </Tabs>
  );
};
export {HeadTabs};