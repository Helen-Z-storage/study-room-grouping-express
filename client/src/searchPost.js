//import './App.css';
import { useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
const tagSpliter = ",";

function AddPost() {
    
  const [authorIds, setAuthorIds] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [direction, setDirection] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleAdding = () => {
    if (authorIds) {
      alert("成功search" + " authorIds: " + authorIds
      + " sortBy: " + sortBy
      + " direction: " + direction
      );
      navigate('/home');
      //event.preventDefault();
    } else {
      setError("请输入至少一个searching authorId！");
    }
  }

  return (
    <div>
    <form onSubmit={() => handleAdding()}>
      <label>
        Author Ids split by ",", required:
        <input type="text" name="AuthorIds" value={authorIds} 
            onChange={(event) => setAuthorIds(event.target.value)}/>
      </label>
      <label>
        Sort by, optional, default "id", choose from "id", "reads", "likes", "popularity":
        <input type="text" name="SortBy" value={sortBy} 
            onChange={(event) => setSortBy(event.target.value)}/>
      </label>
      <label>
        Direction, optional, default "asc", choose from "asc", "desc":
        <input type="text" name="Direction" value={direction} 
            onChange={(event) => setDirection(event.target.value)}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
          <button key={1} onClick={() => navigate('/home')}>Back</button>
          <div>{error}</div>
    </div>
  );
}

export default AddPost;