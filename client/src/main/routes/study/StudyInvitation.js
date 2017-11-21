import React from 'react';

function StudyInvitation(props) {
    const { isFirstTime, startPlay } = props;
    if (isFirstTime)
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
