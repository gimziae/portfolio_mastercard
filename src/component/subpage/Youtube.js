import { useEffect, useRef, useState } from "react"
import axios from "axios";


export default function Youtube(){
    const main = useRef(null);

    const [items, setItems] = useState([]);
    const path = process.env.PUBLIC_URL;
    // youtube info
    const api = 'AIzaSyBLmcoTvbceDJAzuKFsH7ks2aR4MwwJqn4';
    const playlist ='PLOK2vR6uL5S3l1pn5TuCY9_EeggCGt0Jl';
    const playlist2 = 'UUDy8zqsb1-0qFZqG689fZ3Q'
    const num = 10;
    const url1 = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api}&playlistId=${playlist}&maxResults=${num}`;
    const url2 = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api}&playlistId=${playlist2}&maxResults=${num}`;

    useEffect(()=>{
        main.current.classList.add("on");

        // youtube axios
        axios .get(url1).then(json=>{
            console.log(json.data.items);
            setItems(json.data.items);
        })
    },[])



    return(
        <main className="content youtube" ref={main}>
            <figure className="subvisual">
                <img src={path+'/img/youtube_sub.jpeg'} />
                <div className="con">
                    <h1>Creating limitless<br />possibilities for everyone</h1>                    
                </div>
            </figure>
            <div className="inner">
                <div className="channerInfo">

                    <div className="pic">
                        <img src={path+'/img/youtubelogo.jpeg'} />
                        <a href="https://www.youtube.com/channel/UCDy8zqsb1-0qFZqG689fZ3Q" target="_blank">Go to channel</a>
                    </div>
                    <div className="con">
                        <p>Welcome to the official MasterCard YouTube channel, your destination to explore what's Priceless around the globe.</p>
                    </div>
                </div>

                <section>
                    <div className="vidList">
                    {/* youtube 삽입 */}

                    <ul className="vids">
                        {items.map((item,index)=>{
                            let tit = item.snippet.title;
                            let tit_len = tit.length;

                            let desc = item.snippet.description;
                            let desc_len = desc.length;       
                            let id = item.snippet.channelTitle;
                            return(
                            <>
                            
                                <li key={index} className="wrap">
                                    <div className="pic">
                                        <img src={item.snippet.thumbnails.medium.url} />
                                    </div>
                                    <div className="con">
                                        <h2>{ tit_len>40 ? tit.substr(0, 40) + "...": tit }</h2>
                                        <p>{ desc_len>200 ? desc.substr(0,200) + "..." : desc }</p>   
                                    </div>
                                </li>
                                
                            </>
                            )                   
                        })}
                    </ul>
    


                    {/* {items.map((item,index)=>{
                        let tit = item.snippet.title;
                        let tit_len = tit.length;

                        let desc = item.snippet.description;
                        let desc_len = desc.length;       
                        let id = item.snippet.channelTitle;
                        return(
                        <>
                        <ul className="vids">
                            <li key={index} className="wrap">
                                <div className="pic">
                                    <img src={item.snippet.thumbnails.medium.url} />
                                </div>
                                <div className="con">
                                    <h2>{ tit_len>40 ? tit.substr(0, 40) + "...": tit }</h2>
                                    <p>{ desc_len>200 ? desc.substr(0,200) + "..." : desc }</p>   
                                </div>
                            </li>
                        </ul>      
                        </>
                        )                   
                    })}  */}
                    </div>
                </section>
            </div>
        </main>
    )


}

