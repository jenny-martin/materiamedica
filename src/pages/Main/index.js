import React, { Component } from 'react';
import Form from '../../components/Form';
import MateriaPost from '../../components/MateriaPost';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar/NavBar';



export default class Main extends Component {
	state = {
		isPosting: false,
		posts: [
			{
				herbalist: 'Jenny Martin',
				botanical_name: 'Mentha Piperita',
				common_name: 'Mint',
				history: 'stuff',
				uses:'things'
			}
		]
	}
	

	handleClick = (event) => {
		this.setState({
			isPosting: !this.state.isPosting
		})
	}

	handleAddPost = ({herbalist, botanical_name, common_name, history, uses}) => {
		this.setState({
			posts: [{
				herbalist, 
				botanical_name,
				common_name, 
				history,
				uses }, ...this.state.posts]
		})
	}

	handleDeletePost = postIdx => {
		const newStateArray = this.state.posts
		.filter((elem, idx) => idx !== postIdx);

		this.setState({ posts: newStateArray });
	}
	
	render() {
		const postsList = this.state.posts.map((post, index) => {
			return (
				<MateriaPost
					key={index}
					{...post}
					handleDeletePost={this.handleDeletePost}
					index={index}
				/>
			)
		})
	
		return (
			<div>
				<header >
				<NavBar 
					user={this.props.user}
					handleLogout={this.props.handleLogout}/>
    <h1 className="h1">Materia Medica Online</h1>
				</header>
				<section>
					<Button handleClick={this.handleClick} type={"Add New Post"}/>
					{!!this.state.isPosting ? (
						<Form handleAddPost={this.handleAddPost} />
					) : null}
					<ul>{postsList}</ul>
				</section>
			</div>
		)
	}
}
