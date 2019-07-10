import React, { Component } from 'react';

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
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Herbalist</label>
                    <input onChange={this.handleChange}
                    name="herbalist"
                    value={this.state.herbalist}
                    />
                </div>
                <div />
                <label>Botanical Name</label>
                <input onChange={this.handleChange}
                    name="botanical name"
                    value={this.state.botanical_name}
                    />
                <div />
                <div>
                    <label>Common Name</label>
                    <input onChange={this.handleChange}
                    name="common name"
                    value={this.state.common_name}
                    />
                </div>
                <div>
                    <label>History</label>
                    <input onChange={this.handleChange}
                    name="history"
                    value={this.state.history}
                    />
                </div>
                <div>
                <label>Herbalist</label>
                <input onChange={this.handleChange}
                name="herbalist"
                value={this.state.herbalist}
                />
            </div>
            <div>
                <label>Uses</label>
                <input onChange={this.handleChange}
                    name="uses"
                    value={this.state.uses}
                    />
                </div>
                <input type="submit" />
            </form>
        )
    }
}
