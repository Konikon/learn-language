import React, { Component } from 'react';
import WordComponent from './WordComponent';
import { editWord } from '../../../../redux/actions/index';
import { connect } from 'react-redux';

class WordContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdating: true,
            inputs: {
                textEn: props.word.textEn,
                description: props.word.description
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    render() {
        const { word } = this.props;
        const { isUpdating, inputs } = this.state;
        return (
            <WordComponent
                word={word}
                inputs={this.state.inputs}
                handleChange={this.handleChange}
                inputs={inputs}
                isUpdating={isUpdating}
            />
        );
    }
}

export default connect(null, {editWord})(WordContainer);
