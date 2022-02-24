import { useEffect, useRef, useState } from "react"
import axios from "axios";


export default function Youtube(){
    const main = useRef(null);  
    const con = useRef(null);

    const [items, setItems] = useState([]);
    const [pop, setPop] = useState(false);
    const [index, setIndex] = useState(0);
    const path = process.env.PUBLIC_URL;
    // youtube info
    const api = 'AIzaSyBLmcoTvbceDJAzuKFsH7ks2aR4MwwJqn4';
    const playlist ='PLOK2vR6uL5S3l1pn5TuCY9_EeggCGt0Jl';
    const playlist2 = 'UUDy8zqsb1-0qFZqG689fZ3Q'
    const num = 9;
    const url1 = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api}&playlistId=${playlist}&maxResults=${num}`;
    const url2 = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api}&playlistId=${playlist2}&maxResults=${num}`;

    useEffect(()=>{
        main.current.classList.add("on");
        con.current.classList.add("on");

        // youtube axios
        axios .get(url1).then(json=>{
            console.log(json.data.items);
            setItems(json.data.items);
        })
    },[])



    return(
        <>
        <main className="content youtube" ref={main}>
            <figure className="subvisual">
                <img src={path+'/img/youtube_sub.jpeg'} />
                <div className="con">   
                    <h1>Explore what's Priceless <br /> around the globe.</h1>                
                </div>
            </figure>
            <div className="inner">
                <section>
                    {/* 미리보기 */}
                    <div className="preview">
                        <div className="con" ref={con}>
                            <h2>MASTERCARD <br /> <span>INNOVATION</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptates et mollitia eum dolore consequatur vitae reprehenderit laudantium sint, fuga voluptatem nobis natus sit enim? Qui doloribus ex consequatur quae, eum repellat? Quis et cum nemo totam praesentium eum neque, quidem numquam culpa excepturi vitae. Nihil maxime quod molestiae perferendis?</p>
                        </div>
                        <div className="video">
                            <iframe 
                                src="https://www.youtube.com/embed/YG7DGOs-vMI" 
                                title="YouTube video player" frameborder="0"  allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                    {/* 채널정보 */}
                    {/* <div className="channerInfo">
                        <div className="pic">
                            <img src={path+'/img/youtubelogo.jpeg'} />
                            <a href="https://www.youtube.com/channel/UCDy8zqsb1-0qFZqG689fZ3Q" target="_blank">Go to channel</a>
                        </div>
                        <div className="con">
                            <p>Welcome to the official MasterCard YouTube channel, your destination to explore what's Priceless around the globe.</p>
                        </div>
                    </div> */}
                    {/* 비디오 리스트 */}
                    <div className="vidList">
                        {/* youtube 삽입 */}
                    {items.map((item,index)=>{
                        let tit = item.snippet.title;
                        let tit_len = tit.length;

                        let desc = item.snippet.description;
                        let desc_len = desc.length;                       

                        let date = item.snippet.publishedAt;
                        let day = date.split("T")[0];
                        console.log(day);

                        return(
                        <article key={index} className="vids">
                            <div className="wrap">
                                <div className="pic" onClick={()=>{
                                    setPop(true);
                                    setIndex(index);
                                }}>
                                    <img src={item.snippet.thumbnails.medium.url} />
                                </div>
                                <div className="con">
                                    <h2>{ tit_len>30 ? tit.substr(0, 30) + "...": tit }</h2>
                                    <p>{ desc_len>100 ? desc.substr(0,100) + "..." : desc }</p>
                                    <span>{date.split("T")[0]}</span>
                                </div>
                                
                            </div>
                        </article>     
                            )                   
                        })}    
                    </div>
                </section>
            </div>
        </main>
        {pop? <Popup /> : null}
        </>
    )
    
    function Popup(){
        useEffect(()=>{
            document.body.style.overflow = 'hidden';
            return ()=> document.body.style.overflow = 'auto';
        })
        return(
            <aside className="popup">
                <iframe 
                width='100%' 
                height='100%' 
                frameborder="0"
                src={"https://www.youtube.com/embed/"+items[index].snippet.resourceId.videoId} title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
                </iframe>
                <span onClick={()=>{setPop(false);}}>CLOSE</span>
            </aside>
        )
    }

}

