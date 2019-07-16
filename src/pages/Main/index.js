import React, { Component } from 'react';
import Form from '../../components/Form';
import MateriaPost from '../../components/MateriaPost';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar/NavBar';




export default class Main extends Component {
	state = {
		isPosting: true,
		posts: []
	}
	componentDidMount() {
		getPosts().then(results =>
			this.setState({
				posts: results
			})
		)
	}

	handleClick = (event) => {
		this.setState({
			isPosting: !this.state.isPosting
		})
	}

	handleAddPost = ({herbalist, botanical_name, common_name, history, uses}) => {
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ herbalist, botanical_name, common_name, history, uses})
		}
		console.log(options)
		async function createPost() {
			try {
				const sendPost = await fetch('http://localhost:3001/api/posts', options)
				const postResult = await sendPost.json()
				return await postResult
			} catch (error) {
				console.log('line 39', error)
			}
		}
		createPost().then(result => {
			console.log(result)
			this.setState({
				posts: [{ ...result }, ...this.state.posts],
				isPosting: true
			})
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
async function getPosts() {
	try {
		const fetchPosts = await fetch('http://localhost:3001/api/posts')
		const data = fetchPosts.json()
		return await data
	} catch (error) {
		console.log(error)
	}
}

