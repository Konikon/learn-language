import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudyComponent from './StudyComponent';
import { loadWords } from '../../../redux/actions/index';



class StudyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playingWords: [],
            currentIndex: 0,
            isFirstTime: false
        };
        this.toggleIsShow = this.toggleIsShow.bind(this);
        this.startPlay = this.startPlay.bind(this);
    }

    startPlay() {
    const playingWords = [...this.props.words];
    playingWords.forEach(word => word.isMemorized = false);
    this.setState({ playingWords, isFirstTime: false });
    }

    toggleIsShow() {
        this.setState(prevState => ({ isShow: !prevState.isShow }));
    }

    render() {
        return (
            <div>
                <StudyComponent
                    {...this.state}
                    toggleIsShow={this.toggleIsShow}
                    startPlay={this.startPlay}
                />
            </div>
        )
    }

}

export default connect(state => state, { loadWords })(StudyContainer);
