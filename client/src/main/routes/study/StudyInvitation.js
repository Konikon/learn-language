import React from 'react';
import "./study.css";

function StudyInvitation(props) {
    const { isFirstTime, startPlay } = props;
    if (isFirstTime)
    return (
        <div>
            <button className="btn btn-success" onClick={startPlay}>Study now!</button>
        <div className="study-wrap">
            <button className="btn btn-success" onClick={startPlay}>Study now!</button>
        </div>
        </div>
    );
    return (
        <div>
        <div className="study-wrap">
            <p>Congratulations!</p>
            <button className="btn btn-success" onClick={startPlay}>Study again</button>
        </div>
        </div>
    );
}

export default StudyInvitation;
