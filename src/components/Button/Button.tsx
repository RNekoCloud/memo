import { StyledButton } from "./Button.style"

interface ButtonProps {
    text: string
}

const Button = (props: ButtonProps) => {
    const { text } = props 
    const handler = () => {
        console.log("Hello...")
    }  

    return (
            <StyledButton onClick={ handler }>{ text }</StyledButton>
    )
}

export default Button