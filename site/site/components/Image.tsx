import React from "react";
import '../css/Image.scss';
import Typewriter from 'typewriter-effect';

interface ImageProps {
    image: "*.jpg";
    desc: string;
}

const Image = (props : ImageProps) => {

    const element = <Typewriter
        options={{
        strings: [props.desc],
        autoStart: true,
        loop: true,
        delay: 80,
        deleteSpeed: 1,
        cursor: '&#9608;',
        }}
    />

    return (
        <div className="image">
            <img src={props.image} alt="Ethan in a 787" width={600}></img>
            <div className="image-caption">
                <div className="text">ethan@peterson:~$&nbsp;
                    {element}
                </div>
            </div>
        </div>
    );
  };
  
  export default Image;