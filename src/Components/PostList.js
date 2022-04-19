import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        posts:[],
        errorMsg:''
      }
    }
    componentDidMount(){
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
          console.log(response)
          //response data to set array
          this.setState({posts:response.data})
        })
        .catch(error =>{
          console.log(error)
          this.setState({errorMsg:'error retriving data '})
        })
    }
  render() {
    const {posts,errorMsg}=this.state
    return (
      <div>List of PostList
        {
          posts.length ?
          posts.map(post=> <div key={post.id}>{post.title}</div>):null}
          {errorMsg?<div>{errorMsg}</div>:null}
          </div>
    )
  }
}

export default PostList