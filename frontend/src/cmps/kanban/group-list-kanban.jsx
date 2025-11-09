import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { GroupPreviewKanban } from './group-preview-kanban'
import { handleOnDragEnd } from "../../store/board.actions"

export function GroupListKanban({ board }) {
    // CRITICAL FIX: Guard against undefined board or missing properties
    if (!board || !board.groups || !Array.isArray(board.groups)) {
        return (
            <div className="board-loading" style={{padding: '2rem', textAlign: 'center'}}>
                <p>Loading board data...</p>
            </div>
        )
    }

    return <div className="group-list-kanban">
        <DragDropContext onDragEnd={(ev) => handleOnDragEnd(ev, board)}>
            <Droppable droppableId={board._id} type='group' direction="horizontal">
                {(droppableProvided) => {
                    return <section ref={droppableProvided.innerRef}{...droppableProvided.droppableProps}>
                        <ul>
                            {board.groups.map((group, idx) => {
                                return (
                                    <li key={idx}><GroupPreviewKanban idx={idx} group={group} board={board} /></li>)
                            })}
                        </ul>
                        {droppableProvided.placeholder}
                    </section>
                }}
            </Droppable>
        </DragDropContext>
    </div>
}
