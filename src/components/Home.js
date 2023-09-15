import Search from "./Search";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

var Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("react");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBHDR_wmyhP5FbEg1m4Z6ts0c9dYnbj6YE&q=${search}&part=snippet&type=video`
      )
      .then((res) => {
        setData(res.data.items); // Remove the extra semicolon here
      });
  }, [search]);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div>
            <h5>
              <em>search</em>
              <Search handleChange={handleChange} />
            </h5>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
            <h5>
              <em>videoPlayer</em> <VideoPlayer videoId={data[0]?.id.videoId } dat={data} />
              {console.log(data[0])}
            </h5>
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <h5>
              <em>videoList</em> <VideoList videos={data} search={search} />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
