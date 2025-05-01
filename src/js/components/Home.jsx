import React, { useState } from "react";

const TRAFFIC_LIGHT = ["red", "yellow", "green"];

const Home = () => {
    const [color, setColor] = useState(0);
    const [addPurple, setAddPurple] = useState(false);
    const [trafficLight, setTrafficLight] = useState(TRAFFIC_LIGHT);

    const onNextColor = () => {
        const newColor = color + 1;
        if (newColor === trafficLight.length) {
            setColor(0);
        } else {
            setColor(newColor);
        }
    };

    const onAddPurple = () => {
        if (!addPurple) {
            const newTrafficLight = [];
            for (let i = 0; i < trafficLight.length; i++) newTrafficLight.push(trafficLight[i]);
            newTrafficLight.push("purple");
            setTrafficLight(newTrafficLight);
            setAddPurple(true);
        }
    };

    return (
        <div className="traffic-app">
            <div className="traffic-container">
                <div className="traffic-light-pole"></div>
                <div className={`trafficLight ${addPurple ? "with-purple" : ""}`}>
                    <div className={`red ${color === 0 ? "bright" : ""}`} onClick={() => setColor(0)}></div>
                    <div className={`yellow ${color === 1 ? "bright" : ""}`} onClick={() => setColor(1)}></div>
                    <div className={`green ${color === 2 ? "bright" : ""}`} onClick={() => setColor(2)}></div>
                    {addPurple && <div className={`purple ${color === 3 ? "bright" : ""}`} onClick={() => setColor(3)}></div>}
                </div>
            </div>

            <div className="buttons">
                <button className="next-btn" onClick={onNextColor}>Next color</button>
                <button className="add-btn" onClick={onAddPurple}>Add purple</button>
            </div>
        </div>
    );
};

export default Home;