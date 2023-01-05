import React from "react";
import {useState, useEffect} from "react";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { projectAuth } from "./firebase/config";



function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [user, setUser] = useState(null);
  // let user = null;
  useEffect(() => {
    projectAuth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
      else{
        setUser(null);
      }
    });
  }, [user]);
  
  console.log(user);

  return (
    <div className="App">
      {/* <p id="link"><Link to={'/admin-login'}>Admin Login</Link></p> */}
      <Router>
          <Routes>
            {/* <Route exact path="/" element={<App />} ></Route> */}
            <Route exact path="/admin-login" element={<Login />} ></Route>
            <Route exact path="/logout" element={<Logout />} ></Route>
          </Routes>
      </Router> 
      <Title />
      { user && <UploadForm />}
      
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
