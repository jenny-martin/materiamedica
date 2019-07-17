import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
    state = {
        herbalist: '',
		botanical_name: '',
		common_name: '',
		history: '',
		uses:''
    }
    
    handleChange = event => {
        this.setState({
            [event.currentTarget.name] : event.currentTarget.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleAddPost(this.state)
        this.setState({
            herbalist: '',
		    botanical_name: '',
		    common_name: '',
		    history: '',
		    uses:''
        });
    }

    render() {
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <div>
                    <label className="label">Herbalist: </label>
                    <input
                    onChange={this.handleChange}
                    name="herbalist"
                    value={this.state.herbalist}
                    />
                </div>
                <div>
                    <label className="label">Botanical Name:</label>
                    <input 
                    onChange={this.handleChange}
                    name="botanical_name"
                    value={this.state.botanical_name}
                    />
                </div>
                <div>
                    <label className="label">Common Name:</label>
                    <input 
                    onChange={this.handleChange}
                    name="common_name"
                    value={this.state.common_name}
                    />
                    </div>
                <div>
                    <label className="label">History: </label>
                    <input onChange={this.handleChange}
                    name="history"
                    value={this.state.history}
                    />
                </div>
            <div>
                <label className="label">Uses: </label>
                <input onChange={this.handleChange}
                    name="uses"
                    value={this.state.uses}
                    ></input>
                </div>
                <input className="button" type="submit" />
            </form>
        )
    }
}
