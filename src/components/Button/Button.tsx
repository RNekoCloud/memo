import { StyledButton } from "./Button.style"

interface ButtonProps {
    text: string
}

const Button = (props: ButtonProps) => {
    const { text } = props   

    return (
            <StyledButton>{ text }</StyledButton>
    )
}

export default Button