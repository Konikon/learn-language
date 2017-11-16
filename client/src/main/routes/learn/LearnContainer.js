import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadWords } from "../../../redux/actions/index";

class LearnContainer extends Component {
    componentDidMount() {
        this.props.loadWords();
    }
    render() {
        return (
            <div>Container</div>
        );
    }
}

export default connect(null, {loadWords})(LearnContainer);
