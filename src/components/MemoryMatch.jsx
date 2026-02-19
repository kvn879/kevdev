import React, { useState, useEffect } from "react";

const CARD_DATA = [
    {id:1, symbol: '1'}, {id:2, symbol:'2'},
    {id:1, symbol: '3'}, {id:2, symbol:'4'},
    {id:1, symbol: '1'}, {id:2, symbol:'2'},
    {id:1, symbol: '3'}, {id:2, symbol:'4'},
];

function MemoryMatch() {
    const[cards, setCards] = useState(CARD_DATA);
    const[flipped, setFlipped] = useState([]);
    const[solved, setSolved] = useState([]);


    const handleClick = (index) => {
        if(flipped.length === 2 || flipped.includes(index) || solved.includes(cards[index].id)) return;
        setFlipped([...flipped, index]);
    }


    useEffect(() => {
        if(flipped.length === 2) {
            const[first, second] = flipped;
            if(cards[first].symbol === cards[second].symbol) {
                setSolved([...solved, cards[first].id, cards[second].id]);
                setFlipped([]);
            }
        } else {
            const timer = setTimeout(() => setFlipped([]), 1000);
            return () => clearTimeout(timer);
        }
    }, [flipped, cards]);


    return (
        <div className="flex flex-col items-center justify-center p-10 bg-amber-50 min-h-screen">
            <h1 className="text-4xl font-bold text-amber-900 mb-8">Memory Match</h1>
            <div className="grid grid-cols-4 gap-4">
                {cards.map((card, index) => {
                    const isFlipped = flipped.includes(index) || solved.includes(card.id);
                    return (
                        <div
                            key={card.id}
                            onClick={() => handleClick(index)}
                            className={`w-20 h-20 flex items-center justfiy-center text-3xl cursor-pointer rounded-lg shadow-md transition-all duration-300 ${
                                isFlipped ? 'bg-white rotate-0' : 'bg-amber-700 rotate-180'
                            }`}
                        >{isFlipped ? card.symbol : '?'}</div>
                    );
                })}
            </div>
            {solved.length === cards.length && (
                <button onClick={() => {setSolved([]); setFlipped([]);}}
                className="mt-8 px-6 py-2 bg-amber-900 text-white rounded-full hover:bg:amber-700">
                    Play Again
                </button>
            )}

        </div>
    );
}


export default MemoryMatch;