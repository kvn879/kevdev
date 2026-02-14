import MemoryMatch from "../components/MemoryMatch";

function Minigames() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold text-amber-900">Arcade Room</h1>
            <div className="mt-10">
                <MemoryMatch />
            </div>
        </div>
    );
}

export default Minigames;