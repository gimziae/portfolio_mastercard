import { useEffect,useRef,useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faPlus } from "@fortawesome/free-solid-svg-icons";


export default function Department(){
    let main = useRef(null);
    const serve1 = useRef(null);
    const serve2 = useRef(null);
    const serve3 = useRef(null);
    const serve4 = useRef(null);
    const serve5 = useRef(null);

    const path = process.env.PUBLIC_URL;
    const [members,setMembers] = useState([]); //member 배열을 받기위한 빈 배열
    const url = `${path}/DB/department.json`; //department.json 데이타 url
    useEffect(()=>{
        main.current.classList.add("on");

        serve1.current.classList.add("on");
        serve2.current.classList.add("on");
        serve3.current.classList.add("on");
        serve4.current.classList.add("on");
        serve5.current.classList.add("on");

        axios
            .get(url)
            .then(json=>{
                // console.log(json.data.data);
                setMembers(json.data.data);
            })
        
    })
    return(
        <main className="content department" ref={main}>
            <figure className="subvisual">
                <img src={path+'/img/department_sub.jpeg'} />
                <div className="con">
                    <h1>Creating limitless<br />possibilities for everyone</h1>                    
                </div>
            </figure>
            <div className="inner">
                <section>
                    <div className="business">
                        <h2>WHO WE SERVE?</h2>  
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

                    <article className="welcome">
                        <div className="pic">
                            <img src={path+'/img/welcome.png'} />
                        </div>
                        <div className="txt">
                            <p>
                                Our journey toward equity and inclusion should never end. There will always be more for us to understand and do. But we progress in the right direction every day that we choose to bring our decency to the forefront of every interaction, to listen to people, to see them for who they are and what they need, to find ways to level the playing fields and build pathways to opportunity for everyone.
                                <br /><br />
                                <span>- Joshep, CEO</span>
                            </p>
                            
                        </div>
                    </article>

                    <div className="members">
                        <h2>OUR TEAM</h2>
                        {members.map((data,idx)=>{
                            return(
                                <article key={idx}>
                                    <div className="pic">
                                        <img src={`${path}/img/${data.pic}`} />
                                    </div>
                                    <div className="con">
                                        <FontAwesomeIcon icon={faPlus} />
                                        <h3>{data.name}</h3>
                                        <span>{data.position}</span>
                                        <p>
                                            M. {data.mobile} <br />
                                            E. {data.email}
                                        </p>

                                        <a href="#">VIEW FULL PROFILE</a>
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