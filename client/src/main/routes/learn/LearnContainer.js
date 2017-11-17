import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWord } from "../../../redux/actions/index";
import { LearnComponent } from './LearnComponent';
import WordContainer from './word/WordContainer';

class LearnContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                textEn: '',
                description: ''
            }
        }
        this.genList = this.genList.bind(this);
    }

    genList() {
        return this.props.words.map(word => <WordContainer key={word._id} word={word} />);
    }

    render() {
        const { inputs } = this.state;
        return (
            <LearnComponent
                genList={this.genList}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { addWord })(LearnContainer);
