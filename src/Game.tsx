import React, { useContext } from "react";
import {Board} from "./Board";
import {CombatArea} from "./CombatArea";
import {Hand} from "./Hand";
import {Card} from "./Card";

import {DndContext, DragEndEvent} from "@dnd-kit/core";
import { CardStateContext } from "./CardStateContext";
export function Game() {
    const [isDropped, setIsDropped] = React.useState(false);
    const {cards,addCard, setCard} = useContext(CardStateContext);
    function handleDragEnd(event : DragEndEvent) {
        console.log(event);
        if(event.over?.id === "combat-area") {
            console.log("Dropped on combat area");
            setIsDropped(true);
            setCard({id: event.active.id.toString(), zone: "combat-area"});
        }
    }
    return (
        <>
            <button onClick={() => {
                console.log(cards);
                addCard({zone: "hand"})}}>Add Card</button>
            <DndContext onDragEnd={handleDragEnd}>
                <h1>Rogue's Descent</h1>
                {cards.filter(card => card.zone !== "combat-area").map(card => <Card cardData={card} key={card.id}/>)}
                <Board/>
                <CombatArea/>
                <Hand/>
            </DndContext>
        </>
    );
}
