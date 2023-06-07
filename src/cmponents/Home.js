import React, { useState, useEffect } from "react";
import Task from "./Task";

const Home = () => {
  const initialArray = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

  const [task, settask] = useState(initialArray);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  console.log(title, description);
  const submitHandler = (e) => {
    e.preventDefault();
    settask([...task,{title,description}]);
    settitle("")
    setdescription("")
  };
  const deletetask = (index) => {
    const filteredArr = task.filter((val, i) => {
      return i !== index;
    });
    console.log(filteredArr);
    settask(filteredArr);
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div className="container">
    <h1 className="list"> TODOLIST</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        ></textarea>
        <button type="submit"> ADD</button>
      </form>
      {task.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deletetask={deletetask}
          index={index}
        />
      ))}
    </div>
  );
};

export default Home;
