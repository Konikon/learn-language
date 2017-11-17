import React from 'react';
import { connect } from 'react-redux';
import { deleteWord } from '../../../../redux/actions/index';

function WordComponent(props) {
    return (
        <div>
            <div>
                <input value={props.inputs.textEn} />
                <br />
                <input name="description" value={props.inputs.description}/>
                <br />
                <button className="btn btn-success">Confirm</button>
                <button className="btn btn-default">Cancel</button>
            </div>
            <div>
                <h3>{props.textEn}</h3>
                <p>{props.description}</p>
                <button className="btn btn-danger">Remove</button>
                <button className="btn btn-primary">Update</button>
            </div>
        </div>
    );
}

export default connect(null, { deleteWord })(WordComponent)
