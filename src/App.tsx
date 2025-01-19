import React from "react";
import { Game } from "./Game";
import { CardStateProvider } from "./CardStateContext";
export function App() {
    return (
        <CardStateProvider >
            <Game/>
        </CardStateProvider>
    )
}