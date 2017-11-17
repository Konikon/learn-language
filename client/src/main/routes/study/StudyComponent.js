import React from 'react';

function StudyComponent() {
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

export default StudyComponent;
