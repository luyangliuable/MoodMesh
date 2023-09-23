import { useState, useEffect } from "react";
import IUserInputPositiveSection from "./Interface/IUserInputPositiveSection";
import "./UserInputPositiveSection.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface Item {
    id: string;
    content: string;
}

const initialItems: Item[] = [
    { id: "1", content: "Item 1" },
    { id: "2", content: "Item 2" },
    { id: "3", content: "Item 3" }
];

const UserInputPositiveSection = (): React.ReactElement => {
    const [items, setItems] = useState<Item[]>(initialItems);

    const onDragEnd = (result: any) => {
        const { destination, source } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const newItems = [...items];
        const [removed] = newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, removed);

        setItems(newItems);
    };


    return (
        <div className="happy-section">
            <h2 className="happy-section__header">
                What Made You Happy Today?
            </h2>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided: any) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided: any) => (
                                            <div
                                                className="mood-section-card"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            <textarea className="happy-section__input" />
        </div >

    )
}

export default UserInputPositiveSection;
