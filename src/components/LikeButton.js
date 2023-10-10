import { useState } from "react";

function LikeButton(){
    const [likes, setLikes] = useState(0);
    const bgColor = ['red', 'blue', 'black', 'white', 'yellow', 'orange'];
    const randomIndex = Math.floor(Math.random() * bgColor.length);
    const randomBg = bgColor[randomIndex];
    return(
        <div>
            <button style={{backgroundColor: randomBg}} onClick={() => setLikes(likes+1)}> {likes} Likes </button>
        </div>
    )
}

export default LikeButton;