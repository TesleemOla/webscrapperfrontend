import React, { useState, useEffect} from "react";
import axios from "axios";
import Nav from "../Components/Nav"

const News=()=>{
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get("https://nodewebscrapper.herokuapp.com/news").then((result) => {
        setData(result.data);
      });
    }, []);
    return (
      <div className="News">
        <Nav/>
        {data.map(({ title, url, source, id }) => {
          return (
            <div key={id} className="card">
              {source === "BBC" ? (
                <img src="./images/bbc.png" alt="BBC" />
              ) : source === "Guardian" ? (
                <img src="./images/guardian.png" alt="guardian" />
              ) : (
                <img src="./images/reuters.png" alt="reuters" />
              )}
              <h2>{title}</h2>
              <h2>
                <a href={url} target="_blank" rel="noopenner noreferrer">
                  <button>Read more</button>
                </a>
              </h2>
            </div>
          );
        })}
      </div>
    );
}


export default News;