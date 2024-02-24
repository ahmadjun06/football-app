import styled from "styled-components";

type StyledInput = {
  $isError?: boolean;
};

export const ThemeInput = styled.input<StyledInput>`
  color: ${(props) => props.theme.colors.white};
  height: 50px;
  width: calc(5vw + 250px);
  margin-right: auto;
  margin-left: auto;
  display: block;
  border-radius: 10px;
  margin-bottom: ${(props) => (props.$isError ? "4px" : "20px")};
  border: 2px solid ${(props) => props.theme.colors.disabledBgc};
  background-color: transparent;

  &:last-child {
    margin-bottom: 20px;
  }

  &:is(:hover, :focus) {
    border-color: ${(props) =>
      props.$isError
        ? props.theme.colors.primeColor
        : props.theme.colors.green};
  }

  ${(props) =>
    props.is &&
    `
      border-color: ${props.theme.colors.red} ;
      `}
  ::placeholder {
  }
`;

export const ThemeInputError = styled.span<StyledInput>`
  margin-left: 16px;
  font-size: 16px;
  ${(props) => props.$isError && `color:${props.theme.colors.red};`}
`;
