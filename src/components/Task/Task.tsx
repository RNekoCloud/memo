import Card from "../Card/Card.style"
import { TaskContainer, TaskItem } from "./Task.style"

const Task = () => {
    return(
        <TaskContainer>
            <TaskItem>
                <Card>
                    <h2>Task</h2>    
                </Card> 
            </TaskItem>
        </TaskContainer>
    )
}

export default Task