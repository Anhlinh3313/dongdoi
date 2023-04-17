import React, { useState } from "react";
import Deck from "./Deck";

export default function App() {
    const [selected, setSelected] = useState(1);
    var imgs = [],
        length = 5,
        start = 1;
    while (length--) imgs[length] = length + start;
    const [deck, setDeck] = useState([imgs.slice(0, 4), imgs.slice(4, 8)]);

    const selectDeck = (sender, props) => {
        if (props.id !== selected) setSelected(props.id);
    };

    const swapCard = (sender, props, index) => {
        const sourceClone = Array.from(props.id === 1 ? deck[0] : deck[1]);
        const destClone = Array.from(props.id === 1 ? deck[1] : deck[0]);
        const [removed] = sourceClone.splice(index, 1);
        const destIndex = Math.floor((destClone.length - 1) / 2) || 0;

        destClone.splice(destIndex, 0, removed);

        setDeck(
            props.id === 1 ? [sourceClone, destClone] : [destClone, sourceClone]
        );
        setSelected(props.id === 1 ? 2 : 1);
    };

    return (
        <>
            <Deck
                key={1}
                id={1}
                selected={selected === 1 ? true : false}
                onDeckSelected={selectDeck}
                onCardSwapped={swapCard}
                items={deck[0]}
            />
        </>
    );
}
