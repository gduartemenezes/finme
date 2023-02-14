import styled from "styled-components";
interface ICustomButtonProps {
    customWidth: string;
}
export const Button = styled.button<ICustomButtonProps>`
    color: #FFFFFF;
    background: #FD377E;
    border: 0;
    border-radius: 5px;
    height: 48px;
    width: ${(props)=> props.customWidth};
    :hover {
       background: #E34981;
    }
`