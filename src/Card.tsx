import { useDraggable } from "@dnd-kit/core";
import React from "react";

export interface CardData {
    zone: string;
    id: string;
}

export type VisibleCardData = Omit<CardData, "id">;
interface CardProps {
    cardData: CardData;
    height?: number;
    width?: number;
    children?: React.ReactNode;
}
export function Card({cardData, height = 100, width = 75, children = undefined }: CardProps): React.JSX.Element {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: `${cardData.id}`
    });
    
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <canvas height={height} width={width} ref={setNodeRef} {...attributes} {...listeners} style={style}>
            {children}
        </canvas>
    )
}