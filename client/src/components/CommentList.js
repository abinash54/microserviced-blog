import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CommentList = ({ postId }) => { 
    const [comments, setComments] = useState([]);

    const fetchData =async()=>{
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(res.data);
    }

    useEffect(()=>{
        fetchData();
    }, []);

    const renderedComments = comments.map(comm=>{
        return(
            <li key={comm.id}>
                {comm.content}
            </li>
        )
    })

    return (
        <ul>
            {renderedComments}
        </ul>
    )
}

export default CommentList
