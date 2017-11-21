import React from 'react';
import { connect } from 'react-redux';
import StudyInvitation from './StudyInvitation';


function StudyComponent(props) {
    const { isFirstTime, startPlay, playingWords, currentIndex } = props;
    const word = playingWords[currentIndex];
    if (playingWords.length === 0) return (
        <StudyInvitation
            isFirstTime={isFirstTime}
            startPlay={startPlay}
        />
    );

    return (
        <div>
            <h3>Learn</h3>
            <h3>{word.textEn}</h3>
            <h3>{word.description}</h3>
            <p>You passed</p>
            <button className="btn btn-danger">Show/Hide</button>
            <br /><br />
            <button className="btn btn-danger">
                Repeat
            </button>
            <button className="btn btn-success">
                Got it!
            </button>
        </div>
    );
}

export default connect(state => state)(StudyComponent);
