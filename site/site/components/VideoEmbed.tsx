import React from "react";
import '../css/VideoEmbed.scss';

interface VideoEmbedProps {
    embedId: string;
    setEnable: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoEmbed = ({ embedId, setEnable } : VideoEmbedProps) => {

    return (
        <div className="video-background" onClick={() => {setEnable(false);}}>
            <div className="video-container">
                <div className="video-responsive">
                    <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
            </div>
        </div>
        
        
    );
};

export default VideoEmbed;


