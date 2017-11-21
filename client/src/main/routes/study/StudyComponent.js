import React from 'react';
import { connect } from 'react-redux';

function StudyComponent(props) {
    const { isFirstTime, startPlay} = props;
    return (
        <div>
            <h3>Learn</h3>
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
