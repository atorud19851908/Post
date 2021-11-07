import React,{useState} from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'



const FormPost = ({ setPosts, posts }) => {
  const [title, setTitle] = useState("");
  const [jobs, setJobs] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      jobs,
    };
    setPosts([...posts, newPost]);
    localStorage.setItem('dak',newPost)
    setTitle("");
    setJobs("");
  };

  return (
    <div>
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Post nomi"
        />
        <MyInput
          value={jobs}
          onChange={(e) => setJobs(e.target.value)}
          type="text"
          placeholder="Post "
        />
        <MyButton onClick={addNewPost} style ={{backgroundColor:"rgb(1, 88, 16)"}} >Post qo'shish</MyButton>
      </form>
    </div>
  );
};

export default FormPost;
