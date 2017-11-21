import React, { Component } from 'react';
import StudyComponent from './StudyComponent';
import StudyInvitation from './StudyInvitation';
import "./study.css"


class StudyContainer extends Component {
    render() {
        return (
            <div className="study-wrap">
                <StudyComponent />
                <StudyInvitation />
        </div>
        )
    }
}

export default StudyContainer;
