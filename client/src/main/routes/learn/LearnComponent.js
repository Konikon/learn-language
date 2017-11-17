import React from 'react';

export function LearnComponent(props) {
    const { inputs, handleChange, addNewWord } = props;
    return (
        <div style={{ padding: 10 }}>
            { props.genList() }
            <br />
            <div>
                <input placeholder="English text" />
                <br /><br />
                <input placeholder="Vn text"/>
                <br /><br />
                <button>Add new word</button>
            </div>
        </div>
    )
}
