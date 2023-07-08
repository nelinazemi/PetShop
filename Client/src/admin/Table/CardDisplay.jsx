import { Link } from "react-router-dom";
import { DarkModeContext } from "../Context/darkModeContext";
import { useContext } from "react";
import {useState, useEffect} from 'react';
import AddPost from "../Table/addPost";
import Post from "../Table/post";
const CardDisplay = () => {
    const { dispatch } = useContext(DarkModeContext);
    const [posts, setPosts] = useState([]);
    
    const fetchPosts = async() => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4");
      const data = await response.json();
      setPosts(data);
    }
   
   useEffect(() => {
        fetchPosts()
     }, []);
     
    const addPost = async(title, body) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: Math.random().toString(36).slice(2),
        }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      setPosts((prevPosts) => [data, ...prevPosts])
    };
     
    const deletePost = async(id) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
      })
        if(response.status === 200) {
          setPosts(
            posts.filter((post) => {
              return post.id !== id;
            })
          )
        }
    };
  
  
    return (
        <div>
        <AddPost addPost={addPost}/>
        <div className="card container">
          <div className="row my-3">
          <h3 className='text-center'>محصولات</h3>
            {posts.map(post =>{ return <Post key={post.id} body={post.body} title={post.title} />;})}
          </div>
        </div> 

        </div>
    )
}

export default CardDisplay;