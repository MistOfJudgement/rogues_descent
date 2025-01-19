import { useDroppable } from "@dnd-kit/core";
import React, { useContext } from "react";
import {CardStateContext} from "./CardStateContext";
import { Card } from "./Card";

export function CombatArea({children = undefined}) {
    const {isOver, setNodeRef} = useDroppable({
        id: "combat-area"
    });

    const {cards} = useContext(CardStateContext);

    return (
        <div ref={setNodeRef}>
            <h2>Combat Area</h2>
            <canvas id="combat-area" width="500" height="300"></canvas>
            {cards.filter(card => card.zone === "combat-area").map(card => <Card cardData={card} key={card.id}/>)}
            {children}
        </div>
    )
}