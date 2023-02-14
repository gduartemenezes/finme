import React from "react"
import { Button as StyledButton } from "./styles"

interface IButtonProps {
    text: string
    onClick(): void
    width: string
}

export function Button (props: IButtonProps) {
    return <StyledButton onClick={props.onClick} customWidth={props.width} >
        <p className="title-3">{props.text}</p>
        </StyledButton>
}