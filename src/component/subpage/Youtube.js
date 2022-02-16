import { useEffect, useRef, useState } from "react"
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Youtube(){
    const main = useRef(null);
    const serve1 = useRef(null);
    const serve2 = useRef(null);
    const serve3 = useRef(null);
    const serve4 = useRef(null);
    const serve5 = useRef(null);
    const [items, setItems] = useState([]);
    const [index, setIndex] = useState(0);
    const path = process.env.PUBLIC_URL;
    // youtube info
    const api = 'AIzaSyBLmcoTvbceDJAzuKFsH7ks2aR4MwwJqn4';
    const playlist ='PLOK2vR6uL5S3l1pn5TuCY9_EeggCGt0Jl';
    const num = 10;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api}&playlistId=${playlist}&maxResults=${num}`;

    useEffect(()=>{
        main.current.classList.add("on");
    
        serve1.current.classList.add("on");
        serve2.current.classList.add("on");
        serve3.current.classList.add("on");
        serve4.current.classList.add("on");
        serve5.current.classList.add("on");

        // youtube axios
        axios .get(url).then(json=>{
            console.log(json.data.items);
            setItems(json.data.items);
        })
    },[])
    return(
        <main className="content youtube" ref={main}>
            <figure className="subvisual">
            
            </figure>
            <div className="inner">
                <section>
                    <div className="business">
                        <h2>Who we serve?</h2>  
                        <article ref={serve1}>
                            <div className="wrap">
                                <div className="pic">
                                    <img src={path+'/img/consumers.png'} />    
                                </div>
                                <div className="txt">
                                    <h3>Consumers</h3>
                                    <span>Learn more<FontAwesomeIcon icon={faArrowRightLong} /></span>                                
                                </div>
                            </div>
                        </article>  
                        <article ref={serve2}>
                            <div className="wrap">
                                <div className="pic">
                                <img src={path+'/img/businesses.png'} />
                                </div>
                                <div className="txt">
                                    <h3>Small & <br />medium <br />businesses</h3>
                                    <span>Learn more<FontAwesomeIcon icon={faArrowRightLong} /></span>
                                </div>
                            </div>
                        </article>  
                        <article ref={serve3}>
                            <div className="wrap">
                                <div className="pic">
                                    <img src={path+'/img/public.png'} />
                                </div>
                                <div className="txt">
                                    <h3>Governments <br />& public <br />sector</h3>
                                    <span>Learn more<FontAwesomeIcon icon={faArrowRightLong} /></span>
                                </div>
                            </div>
                        </article>  
                        <article ref={serve4}>
                            <div className="wrap">
                                <div className="pic">
                                    <img src={path+'/img/enterprises.png'} />
                                </div>
                                <div className="txt">
                                    <h3>Large <br />enterprises</h3>
                                    <span>Learn more<FontAwesomeIcon icon={faArrowRightLong} /></span>
                                </div>
                            </div>
                        </article>  
                        <article ref={serve5}>
                            <div className="wrap">
                                <div className="pic">
                                    <img src={path+'/img/banks.png'} />
                                </div>
                                <div className="txt">
                                    <h3>Banks & credit <br />unions</h3>
                                    <span>Learn more<FontAwesomeIcon icon={faArrowRightLong} /></span>
                                </div>
                            </div>
                        </article>                      
                    </div>

                    <div className="vidList">
                    {/* youtube 삽입 */}
                    {items.map((item,index)=>{
                        let tit = item.snippet.title;
                        let tit_len = tit.length;

                        let desc = item.snippet.description;
                        let desc_len = desc.length;                       
                    
                        return(
                        <article key={index} className="vids">
                            <div className="wrap">
                                <div className="pic">
                                    <img src={item.snippet.thumbnails.medium.url} />
                                </div>
                                <div className="con">
                                    <h2>{ tit_len>40 ? tit.substr(0, 40) + "...": tit }</h2>
                                    <p>{ desc_len>200 ? desc.substr(0,200) + "..." : desc }</p>   
                                </div>
                            </div>
                        </article>     
                            )                   
                        })}    
                    </div>
                       

                </section>
            </div>
        </main>
    )
}