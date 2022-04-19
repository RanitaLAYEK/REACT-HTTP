import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import PostList from './Components/PostList';


class App extends Component {
	render() {
		return (
			<div className="App">
				{/*<PostForm />*/}
				<PostList /> 
			</div>
		)
	}
}

export default App