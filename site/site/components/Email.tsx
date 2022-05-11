import React from "react";
import '../css/Email.scss';

interface EmailProps {
    setEnable: React.Dispatch<React.SetStateAction<boolean>>;
}

const Email = ({ setEnable } : EmailProps) => {

    return (
        <div className="email-background" onClick={(event) => {
            if(event.target === event.currentTarget) {
                setEnable(false);
            }
        }}>
            <div className="email-container">
                <p>Email:&nbsp;&nbsp;</p><a href="mailto:erpeterson18@gmail.com">erpeterson18@gmail.com</a>
            </div>
        </div>
        
        
    );
};

export default Email;