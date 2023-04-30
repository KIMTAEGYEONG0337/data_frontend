//https://codesandbox.io/s/github/Abhipatil0105/Calculator/tree/main/?file=/src/styled.ts:0-692
import styled from "@emotion/styled";
import { PortWidget } from "@projectstorm/react-diagrams";

export const Widget = styled.div`
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.2);
  width: 250px;
  height: 200px;
  background: #fff;
  border-radius: 12px;
  position: relative;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  text-align: center;  
  align-items: center;
  justify-content: space-between;
`;

export const Port = styled(PortWidget)`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #000;
  position: absolute;
  margin: -7px;
`;

export const Input = styled.input`
  border: none;
  font-size: 2em;
  width: 100%;
`;

export const Result = styled.p`
  margin: 0;
  font-size: 2em;
`;
