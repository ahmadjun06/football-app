import styled from "styled-components";

type StyledInput = {
  $isError?: boolean;
};

export const ThemeInput = styled.input<StyledInput>`
height: 50px;
width: calc(12vw + 250px);
 margin-right:auto;
  margin-left:auto; 
display: block;
border-radius: 10px;
margin-bottom: ${(props) => (props.$isError ? "4px" : "20px")} ;
border: 2px solid ${(props) => props.theme.colors.disabledBgc} ;
background-color: transparent;

&:last-child {
  margin-bottom: 20px;
}

&:is(:hover, :focus) {
  border-color: ${(props) =>
    props.$isError ? props.theme.colors.primeColor : props.theme.colors.green};
}

${(props) =>
  props.is &&
  `
border-color: ${props.theme.colors.red} ;
`}
`;

export const ThemeInputError = styled.span<StyledInput>`
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  display: block;
  margin: 0 0 20px;
  ${(props) =>
    props.$isError &&
    `
color:${props.theme.colors.red};
`}
`;
