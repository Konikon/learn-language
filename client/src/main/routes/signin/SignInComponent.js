import React, { Component } from 'react';
import "./signin.css";

export default class SigninComponent extends Component {
    render() {
        return (
            <div className="signin-form-wrapper">
                <form onSubmit={this.props.handleSubmit}>
                    <h3>Sign In</h3>
                    <input onChange={this.props.handleChange} value={this.props.username} name="username" type="text" placeholder="@Username" /><br/><br/>
                    <input onChange={this.props.handleChange} value={this.props.password} name="password" type="password" placeholder="#" /><br/><br/>
                    <button type="submit">Submit</button>
                    <p>{this.props.errMsg}</p>
                </form>
            </div>
        )
    }
}
