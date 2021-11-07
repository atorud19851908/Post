import React, { useState } from 'react'
import FormPost from './components/FormPost'
import PostList from './components/PostList'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/MySelect'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Java Script", jobs: "Frontend" },
    { id: 2, title: "Nod Js", jobs: "Bac-kend" }
    
  ]);

  const [select, setSelect] = useState("");

 

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
    
  };
  const sortPost = (sort) => {
    setSelect(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="app">
      
      <FormPost posts={posts} setPosts={setPosts} />
      <hr style={{ margin: "15px 0" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MyInput className="w-100" placeholder="Search..." />
        <MySelect
          value={select}
          onChange={sortPost}
          defaultValue="Sort"
          options={[
            { value: "title", name: "Nomi orqali" },
            { value: "jobs", name: "Matn orqali" },
          ]}
        ></MySelect>
      </div>

      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Post ro'yxati" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Ro'yxat topilmadi!</h1>
      )}
    </div>
  );
}

export default App
