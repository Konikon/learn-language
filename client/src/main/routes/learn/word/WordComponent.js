import React from 'react';
import { connect } from 'react-redux';
import { deleteWord } from '../../../../redux/actions/index';

function WordComponent(props) {
    const { textEn, description, id } = props.word;
    const { isUpdating, handleChange, inputs, deleteWord, toggleUpdating, updateWord } = props;
    return (
        <div>
            <div style={{ display: isUpdating ? 'block' : 'none' }}>
                <input
                    name="textEn"
                    onChange={handleChange}
                    value={inputs.textEn} />
                <br />
                <input
                    name="description"
                    onChange={handleChange}
                    value={inputs.description}/>
                <br />
                <button className="btn btn-success" onClick={updateWord}>Confirm</button>
                <button className="btn btn-default" onClick={toggleUpdating}>Cancel</button>
            </div>
            <div style={{ display: isUpdating ? 'none' : 'block' }}>
                <h3>{textEn}</h3>
                <p>{description}</p>
                <button className="btn btn-danger" onClick={() => deleteWord(id)}>Remove</button>
                <button className="btn btn-primary" onClick={toggleUpdating}>Update</button>
            </div>
        </div>
    );
}

export default connect(null, { deleteWord })(WordComponent)
