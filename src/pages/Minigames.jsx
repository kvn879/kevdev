import React, { useState } from 'react';
import MemoryMatch from '../components/MemoryMatch';
// import Snake from '../components/games/Snake'; // For later!

function Minigames() {
    const [activeGame, setActiveGame] = useState(null);

    const gameList = [
        { id: 'memory', title: 'Memory Match', icon: '🧠', component: <MemoryMatch /> },
        { id: 'snake', title: 'Snake (Soon)', icon: '🐍', component: null },
        { id: 'whack', title: 'Whack-a-Mole', icon: '🔨', component: null },
        { id: 'ttt', title: 'Tic Tac Toe', icon: '❌', component: null },
        { id: 'clicker', title: 'Speed Clicker', icon: '🖱️', component: null },
        { id: '2048', title: '2048 Clone', icon: '🔢', component: null },
    ];

    return (
        <div className="pt-24 min-h-screen bg-amber-50 flex flex-col items-center">
            {/* Giant Centered Header */}
            <h1 className="text-6xl md:text-8xl font-black text-amber-900 mb-12 tracking-tighter uppercase">
                Arcade Room
            </h1>

            {!activeGame ? (
                /* 3-Column Selection Grid */
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-10">
                    {gameList.map((game) => (
                        <button
                            key={game.id}
                            onClick={() => game.component && setActiveGame(game.id)}
                            className={`p-8 rounded-2xl border-2 border-amber-900/20 bg-white shadow-xl hover:scale-105 hover:bg-amber-100 transition-all flex flex-col items-center justify-center gap-4 ${!game.component && 'opacity-50 cursor-not-allowed'}`}
                        >
                            <span className="text-5xl">{game.icon}</span>
                            <span className="text-xl font-bold text-amber-900 uppercase tracking-wide">
                                {game.title}
                            </span>
                        </button>
                    ))}
                </div>
            ) : (
                /* Game Container */
                <div className="w-full flex flex-col items-center">
                    <button 
                        onClick={() => setActiveGame(null)}
                        className="mb-6 text-amber-700 font-bold hover:underline"
                    >
                        Back to Menu
                    </button>
                    <div className="p-4 bg-white rounded-3xl shadow-2xl border-4 border-amber-900/10">
                        {gameList.find(g => g.id === activeGame)?.component}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Minigames;