// import { useState, useEffect } from "react";
// import "./Axi.css";
// import axios from "axios";

// const Axios = () => {
//     const [myData, setMyData] = useState([]);


//     // using Promises
//     useEffect(() => {
//         axios.get("https://v1.nocodeapi.com/manuga/spotify/AjVKoQIRcoWvPKdK/search?q=nadaaniyan&type=track")
//             .then((response) => setMyData(response.data))

//     }, []);


//     return (
//         <div className="body">
//             <h1><center>M music</center></h1>


//             <div className="grid">
//                 {myData.slice(0, 9).map((post) => {
//                     const { tracks, items } = post;
//                     return (
//                        <div>
//                             <h2>{items.slice(0, 15).toUpperCase()}</h2>
//                             <p>{tracks}</p>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Axios;

import axios from "axios";
import React from "react";
import "./Axi.css";

const baseURL = "https://v1.nocodeapi.com/manuga/spotify/AjVKoQIRcoWvPKdK/search?q=nadaaniyan&type=track";

export default function Axios() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);
  
    // if (!post) return null;  

    return (
        <div className="grid">
            <h1 >
                <center>M-MUSIC</center></h1>
            <div className="card">

                <h2 >{post.tracks.slice(0, 16).toUpperCase()}</h2>
                <p>{post.items}</p>
            </div>
        </div>
    );
}