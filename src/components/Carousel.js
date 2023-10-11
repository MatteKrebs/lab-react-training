import { useState } from "react"

function Carousel(props) {
    const [image, setImage] = useState(0)
    return (
        <div className="Carousel">
            <button onClick={() => setImage(image-1<0 ? props.images.length-1 : image-1)}>Left</button>
            <img src={props.images[image]} alt='' />
            <button onClick={() => setImage(image+1>props.images.length-1 ? 0 : image+1)}>Right</button>
        </div>
    )
}

export default Carousel;