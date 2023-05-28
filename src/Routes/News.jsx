import React, { useState, useEffect} from "react";

import Nav from "../Components/Nav"

const News=()=>{
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(`https://webscrapper-tfmb.onrender.com/news`)
      .then(res=> res.json())
      .then(res=> setData(res))
      .catch(err=> console.error(err))
      
    }, []);
    return (
      <div>
        <Nav/>
        <div  className="News">
        {data.map(({ title, url, source, id }) => {
          return (
            <div key={id} className="card">
              {source === "BBC" ? (
                <img src="./images/bbc.png" alt="BBC" />
              ) : source === "Guardian" ? (
                <img src="./images/guardian.png" alt="guardian" />
              ) : source === "Reuters" ? (
                <img src="./images/reuters.png" alt="reuters" />)
                : <img src="https://goodlogo.com/images/logos/cnn_logo_2449.gif"
                alt="cnn"/>
              }
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
      </div>
    );
}


export default News;