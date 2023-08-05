import { InputWrapper, InputContent } from "./Input.style"
import Button from "../Button/Button"

const Input = () => {
    return (
        <>
        <InputWrapper> 
                <InputContent placeholder="Enter your activity in here...">
                </InputContent>
                <Button text="Add Activity" />
            </InputWrapper>
        </>
    )
}

export default Input