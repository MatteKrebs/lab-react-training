import { useState } from "react";
import mattlinkdin from '../assets/images/mattlinkdin.png';
import mattlinkdinglasses from '../assets/images/mattlinkdin_glasses.png';

function ClickablePicture({ img, clickedImg }) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleImage = () => {
    setIsClicked(!isClicked);
  };

  return (
<img
      onClick={toggleImage}
      src={isClicked ? mattlinkdinglasses : mattlinkdin}
      alt="Toggle between Matt with and without glasses"
    />
  );
}

export default ClickablePicture;