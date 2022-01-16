
import React from 'react'
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

const App = () => {
    return (
        <div className="container mt-4 text-light">
            <h1>Create Post</h1>
            <PostCreate />
            <hr style={{ borderColor:'#fff' }}/>
            <PostList />

        </div>
    )
}

export default App;
