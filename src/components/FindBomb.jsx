import React, { useMemo, useState } from 'react'

export const FindBomb = () => {

    let totalTiles = 5;
    let buildGride = totalTiles * totalTiles;

    let bombPos = useMemo(()=>Math.floor(Math.random()*buildGride), []);
    console.log(bombPos);
    
    const [flag, setFlag] = useState(false);
    const [clickedTiles, setClickedTiles] = useState([]);
    const [message, setMessage] = useState("Find Bomb");
    const [emoji, setEmoji] = useState("");
    const [score, setScore] = useState(0);

    const handleTileClick = (index) => {
        if(flag)
            return;

        setClickedTiles([...clickedTiles, index]);
        setMessage("Searching...");
        setScore(score+1);
        // setEmoji("💎");
        if(index == bombPos) {
            // setScore(score-1);
            setMessage("Game Over...");
            setFlag(true);
            // setEmoji("💣");
        }
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>{message}</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${totalTiles}, 50px)`,
                    gap: "10px",
                    justifyContent: "center",
                }}
            >
                {Array.from({ length: buildGride }).map((_, tileIndex) => (
                    <div
                        key={tileIndex}
                        onClick={() => handleTileClick(tileIndex)}
                        style={{
                            width: "50px",
                            height: "50px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid black",
                            backgroundColor: clickedTiles.includes(tileIndex) ? "#ddd" : "#fff",
                            cursor: "pointer"
                        }}
                    >
                        {flag && (bombPos == tileIndex && "💣")}
                        {/* {flag == "true" && bombPos == tileIndex ? bomb : clickedTiles.includes(tileIndex) ? setEmoji : ""} */}
                    </div>
                ))}
            </div><br/>
            <h2>Your score : {clickedTiles.length}</h2>

        </div>
    )
}