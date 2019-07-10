import React, { Component } from 'react';
import Form from '../Form';

export default class Main extends Component {
	state = {
		isPosting: true,
		post: [
			{
				herbalist: 'Jenny Martin',
				botanical_name: 'Mentha Piperita',
				common_name: 'Mint',
				history: 'stuff',
				uses:'things'
			}
		]
	}

	handleClick = event => {
		this.setState({
			isPosting: !this.state.isPosting
		})
	}

	handleAddPost = ({
		herbalist, 
		botanical_name,
		common_name, 
		history,
		uses
	}) => {
		this.setState({
			posts: [{herbalist, 
				botanical_name,
				common_name, 
				history,
				uses }, ...this.state.posts]
		})
	}

	render() {
		const posts = this.state.post.map((post, index) => {
			return (
				<li>
					<h3>{post.herbalist}</h3>
					<h5>{post.botanical_name}</h5>
					<h5>{post.common_name}</h5>
					<h5>{post.history}</h5>
					<h6>{post.uses}</h6>

				</li>
			)
		})

		return (
			<div>
				<header>
					<h1>Materia Medica Online</h1>
				</header>
				<section>
				<button onClick={this.handleClick}>toggle</button>
					{!!this.state.isPosting ? (
						<Form handleAddPost={this.handleAddPost} />
					) : null}
					<ul>{posts}</ul>
				</section>
			</div>
		)
	}
}