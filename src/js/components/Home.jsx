import React, { useState } from "react";

const Home = () => {
    const [color, setColor] = useState("red");

    return (
        <div className="traffic-container">
            <div className="traffic-light-pole"></div>
            <div className="trafficLight">
                <div
                    className={`red ${color === "red" ? "bright" : ""}`}
                    onClick={() => setColor("red")}
                ></div>
                <div
                    className={`yellow ${color === "yellow" ? "bright" : ""}`}
                    onClick={() => setColor("yellow")}
                ></div>
                <div
                    className={`green ${color === "green" ? "bright" : ""}`}
                    onClick={() => setColor("green")}
                ></div>
            </div>
        </div>
    );
};

export default Home;