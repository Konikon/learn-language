import React from 'react';
import { connect } from 'react-redux';
import StudyInvitation from './StudyInvitation';


function StudyComponent(props) {
    const { isShow, isFirstTime, startPlay, playingWords, currentIndex, getNextRandomIndex, gotIt, toggleIsShow, words } = props;
    const word = playingWords[currentIndex];
    if (playingWords.length === 0) return (
        <StudyInvitation
            isFirstTime={isFirstTime}
            playingWords={playingWords}
            startPlay={startPlay}
        />
    );

    return (
        <div>
            <h3>Learn</h3>
            <h3>{word.textEn}</h3>
            {/* bug when you repeat is good, but when you got it, BUGGED */}
            <p>You passed {words.length - playingWords.length}/{words.length}</p>
            <h3>{ isShow ? word.description : '------' }</h3>
            <button className="btn btn-danger" onClick={toggleIsShow}>{ isShow ? 'Hide' : 'Show' }
            </button>
            <br /><br />
            <button className="btn btn-danger" onClick={getNextRandomIndex}>
                Repeat
            </button>
            <button className="btn btn-success" onClick={() => gotIt(word._id)}>
                Got it!
            </button>
        </div>
    );
}

export default connect(state => state)(StudyComponent);
