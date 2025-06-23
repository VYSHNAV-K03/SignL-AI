import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../AuthContext";
import axios from "axios";
import { apiUrl } from "../api";

const Add = styled.section`
  min-height: 80vh;
  background-color: #f4f4f4;
  padding: 100px 0;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .form-container {
    background: #ffffff;
    padding: 4rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 450px;
  }

  .input-group {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 0.7rem;
  }

  input, select {
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1.4rem;
    background: #f8f8f8;
    color: black;
  }

  input::placeholder {
    color: #666;
  }

  button {
    width: 100%;
    padding: 1.2rem;
    background-color: #0071f3;
    border: none;
    color: white;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s ease;
  }

  button:hover {
    background-color: #005bb5;
  }

  .list {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
    width: 80%;
  }

  .list-content {
    background: #ffffff;
    padding: 2.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .list-content img {
    width: 100%;
    border-radius: 10px;
  }

  .delete-btn {
    margin-top: 1.5rem;
    padding: 0.8rem 1.2rem;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.2rem;
  }
`;

const Course = ({ deaf }) => {
  const { role } = useAuth();
  const [url, setUrl] = useState("");
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [audio, setAudio] = useState(false);

  const uploadCourse = () => {
    const formData = new FormData();
    formData.append("audio", audio);
    formData.append("title", title);
    formData.append("url", url);
    formData.append("thumbnail", file);

    axios
      .post(apiUrl + "/uploadCourse", formData)
      .then(() => {
        window.alert("Success");
        getCourse();
      })
      .catch(() => {
        window.alert("Something went wrong");
      });
  };

  const getCourse = () => {
    axios
      .get(apiUrl + `/getCourses/${deaf}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .get(apiUrl + `/deleteCourse/${id}`)
      .then((response) => {
        alert(response.data)
        window.location.reload()
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <Add>
      <div className="title">Learn Course</div>
      {role === "mentor" && (
        <div className="form-container">
          <h2>Upload Content</h2>
          <div className="input-group">
            <label>Title</label>
            <input type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Upload Image</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div className="input-group">
            <label>Upload URL</label>
            <input type="text" placeholder="Enter URL" onChange={(e) => setUrl(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Course with Audio</label>
            <select onChange={(e) => setAudio(e.target.value)}>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          <button onClick={uploadCourse}>SUBMIT</button>
        </div>
      )}
      <div className="list">
        {data.map((item) => (
          <div className="list-content" key={item._id}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <h2>{item.title}</h2>
              <img src={apiUrl + "/" + item.file} alt={item.title} />
            </a>
            <button className="delete-btn" onClick={() => handleDelete(item._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </Add>
  );
};

export default Course;
