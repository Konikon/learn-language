import React from 'react';

function StudyInvitation(props) {
    if (props.isFirstTime)
    return (
        <div>
            <button className="btn btn-success" onClick={props.startPlay}>Study now!</button>
        </div>
    );
    return (
        <div>
            <p>Congratulations!</p>
            <button className="btn btn-success" onClick={props.startPlay}>Study again</button>
        </div>
    );
}

export default StudyInvitation;
