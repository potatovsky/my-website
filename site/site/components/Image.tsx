import React from "react";
import '../css/Image.scss';

interface ImageProps {
    image: "*.jpg";
    desc: string;
}

const Image = (props : ImageProps) => {

    return (
        <div className="image">
            <img src={props.image} alt="Ethan in a 787" width={600}></img>
            <div className="image-caption">
                <div className="text">ethan@peterson:~$&nbsp;
                    <span className="blink-text">{props.desc}<span className="cursor"> &#9608;</span></span>
                </div>
            </div>
        </div>
    );
  };
  
  export default Image;