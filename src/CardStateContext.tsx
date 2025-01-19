import React, { ReactNode } from "react";
import { CardData, VisibleCardData } from "./Card";
export interface CardStateContextState {
    cards: CardData[]
    addCard: (card: VisibleCardData) => void
    removeCard: (card: VisibleCardData) => void
    setCard: (card: Partial<VisibleCardData> & {id: string}) => void
}

export const CardStateContext = React.createContext<CardStateContextState>({
    cards: [],
    addCard: () => {},
    removeCard: () => {},
    setCard: () => {}
});



export function CardStateProvider({children}: {children: ReactNode}) {
    const [cards, setCards] = React.useState<CardData[]>([]);

    function addCard(card: VisibleCardData) {
        setCards([...cards, {...card, id: Math.random().toString()}]);
    }

    function removeCard(card: VisibleCardData) {
        setCards(cards.filter(c => c !== card));
    }

    function setCard(card: Partial<VisibleCardData> & {id: string}) {
        setCards(cards.map(c => c.id === card.id ? {...c, ...card} : c));
    }

    return (
        <CardStateContext.Provider value={{cards, addCard, removeCard, setCard}}>
            {children}
        </CardStateContext.Provider>
    );
}