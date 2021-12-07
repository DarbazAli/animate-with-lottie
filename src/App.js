import { useState } from "react"
import { Player, Controls } from "@lottiefiles/react-lottie-player"
import santaPopup from "./santa-pop-up.json"

const App = () => {
    const [showAnimation, setShowAnimation] = useState(false)

    const handleClick = () => setShowAnimation(true)
    return (
        <div>
            {showAnimation && (
                <Player
                    keepLastFrame
                    autoplay
                    loop
                    speed={1}
                    src={santaPopup}
                    style={{ height: "300px", width: "300px" }}>
                    <Controls
                        visible={true}
                        buttons={["play", "repeat", "frame", "debug"]}
                    />
                </Player>
            )}

            <button onClick={handleClick}>Animate</button>
        </div>
    )
}

export default App
