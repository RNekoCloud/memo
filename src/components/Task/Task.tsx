import Card from "../Card/Card.style"
import { TaskContainer, TaskItem, TaskTitle, TaskContent } from "./Task.style"

const Task = () => {
    return(
        <TaskContainer>
            <TaskItem>
                <Card>
                    <TaskTitle>Ngoding</TaskTitle>
                    <TaskContent>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at dolore incidunt, itaque, consequuntur porro impedit assumenda numquam et id culpa praesentium. Eveniet architecto omnis, exercitationem qui ducimus recusandae beatae hic sint consequuntur consequatur nulla dolore error rem sed labore!</TaskContent>
                </Card> 
            </TaskItem>
            <TaskItem>
                <Card>
                    <TaskTitle>Rest</TaskTitle>
                    <TaskContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum mollitia veritatis consequuntur odit eius iure ex beatae temporibus quibusdam nesciunt ipsa sit hic, aut numquam earum reprehenderit maiores repellat autem quia vero, dignissimos ducimus eum.</TaskContent>
                </Card> 
            </TaskItem>
        </TaskContainer>
    )
}

export default Task