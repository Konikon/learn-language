import React, { Component } from 'react';
import WordComponent from './WordComponent';
import { editWord } from '../../../../redux/actions/index';
import { connect } from 'react-redux';

class WordContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                textEn: props.word.textEn,
                description: props.word.description
            }
        }
    }

    render() {
        return (
            <WordComponent
                word={this.state.word}
                inputs={this.state.inputs}
            />
        );
    }
}

export default connect(null, {editWord})(WordContainer);
