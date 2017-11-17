import React, { Component } from 'react';
import StudyComponent from './StudyComponent';
import StudyInvitation from './StudyInvitation';


class StudyContainer extends Component {
    render() {
        return (
            <div>
                <StudyComponent />
                <StudyInvitation />
        </div>
        )
    }
}

export default StudyContainer;
