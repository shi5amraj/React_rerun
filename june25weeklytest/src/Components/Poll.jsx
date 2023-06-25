import React from 'react'
import { useRef } from 'react';
import {useState,useEffect} from "react";

const Poll = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [timer,setTimer]=useState(10);

         
    
  
    useEffect(() => {
      

      const fetchPosts = async () => {
        try {
          const response = await fetch(
            `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
          );
          const data = await response.json();
          const newPosts = data.hits.map((post) => ({
            title: post.title,
            url: post.url,
            createdAt: post.created_at,
            author: post.author,
          }));
          setPosts((prevPosts) => [...prevPosts, ...newPosts]);
          setPage((prevPage) => prevPage + 1);
         
          
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
  
      const intervalId = setInterval(fetchPosts, 10000);
       
     
  
      return () => {
        clearInterval(intervalId);
      };
    }, [page]);
  
    return ( 

        <>
       
        <div style={{textAlign:"center"}}>
          <h1>Please Wait Poll Loading</h1>
        
          {/* <p>Loading Time: {timer} </p> */}

        </div>

    {
    posts.length>0 &&
      <div>
        <table >
          <thead>
            <tr>
              <th>Title</th>
              <th>URL</th>
              <th>Created At</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={index}>
                <td>{post.title}</td>
                <td>{post.url}</td>
                <td>{post.createdAt}</td>
                <td>{post.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
}</>
    );
}

export default Poll