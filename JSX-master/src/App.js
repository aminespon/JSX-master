import React from "react";
import "./App.css";
import picture from "./img2.jpg";
import video from "./5sec.mp4";
import background from "./nature.jpg";

const App = () => {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className="Title">Welcome To My Page</h2>

      <center>
        <h3>This Is My First Img In Public</h3>
        <img src="/img1.webp" alt="img1" />
        <h3>This Is My First Img In Src</h3>{" "}
        <img className="img2" src={picture} alt="img2" />
        <h3>This Is My First video In Src</h3>
        <video width="320" height="240" autoplay controls>
          <source src={video} type="video/mp4" />
        </video>
      </center>
    </div>
  );
};

export default App;
