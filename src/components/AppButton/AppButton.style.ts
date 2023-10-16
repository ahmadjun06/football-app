import styled from "styled-components";

export const Button = styled.button`
  font-size: 20px;
  height: 50px;
  width: calc(10vw + 253px);
  background-color: #4caf50;
  border: none;
  border-radius: 12px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  &:hover {
    transition: 500ms;
    background-color: lightblue;
  }

  &:active {
    background-color: gray;
  }
  margin-right: 10px;
`;
