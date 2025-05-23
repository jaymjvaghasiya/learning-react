import React, { useCallback, useMemo, useState } from 'react'
import { set } from 'react-hook-form';


const Tile = React.memo(({ index, isClicked, isBomb, flag, onClick }) => {
    return (
        <div
            onClick={() => onClick(index)}
            style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                backgroundColor: isClicked ? "#ddd" : "#fff",
                cursor: flag ? "not-allowed" : "pointer"
            }}
        >
            {flag && isBomb ? "💣" : isClicked ? "💎" : ""}
        </div>
    )
})

export const FindBomb = () => {

    let totalTiles = 5;
    let buildGride = totalTiles * totalTiles;

    let bombPos = useMemo(() => Math.floor(Math.random() * buildGride), []);
    console.log(bombPos);

    const [flag, setFlag] = useState(false);
    const [clickedTiles, setClickedTiles] = useState(new Set());
    const [message, setMessage] = useState("Find Bomb");

    const handleTileClick = useCallback((index) => {
        if (flag)
            return;

        setClickedTiles(prev => new Set(prev).add(index));
        setMessage("Searching...");
        if (index == bombPos) {
            setMessage("Game Over...");
            setFlag(true);
        }
    }, [flag, clickedTiles, bombPos]);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>{message}</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${totalTiles}, 50px)`,
                    gap: "10px",
                    justifyContent: "center",
                }}
            >
                {Array.from({ length: buildGride }).map((_, index) => (
                    <Tile 
                        key={index}
                        index={index}
                        isClicked={clickedTiles.has(index)}
                        isBomb={bombPos == index}
                        flag={flag}
                        onClick={handleTileClick}
                    />
                ))}
            </div><br />
            <h2>Your score : {clickedTiles.size}</h2>

        </div>
    )
}