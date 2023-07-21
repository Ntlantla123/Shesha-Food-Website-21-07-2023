import React, { useEffect, useState } from 'react';
import './Video.css';

const API = "AIzaSyBvLUpH7gvS4jYl0HSqNGPyE4R1GSgTKJQ"
const channelId = "UCmFt1y9cbHx3amPRctMEyvA"


var fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
export const Video = () => {

  const [allvideos, setAllvideos] = useState([])
  useEffect(() => {
    fetch(fetchurl).then((response) => response.json()).then((resJson) => {
      const result = resJson.items.map(doc => ({
        ...doc,
        Videolink: "https://www.youtube.com/embed/"+doc.id.videoId
      }));
      setAllvideos(result)
    })
  }, [])

// console.log(allvideos)
  return (
    <div>
      {allvideos.map((item) => {
        return (
          <div className="yt-holder">
           <iframe width="560" height="315" src={item.Videolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{position:"relative",left:"40%",}}></iframe>
            {/*<p>{item.snippet.title}</p>*/}
          </div>
        );

      })}
    </div>
  );
};
