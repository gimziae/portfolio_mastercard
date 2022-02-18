import { useEffect,useRef,useState } from "react";
import axios from "axios";

export default function Department(){
    let main = useRef(null);
    const path = process.env.PUBLIC_URL;
    const [members,setMembers] = useState([]); //member 배열을 받기위한 빈 배열
    const url = `${path}/db/department.json`; //department.json 데이타 url
    useEffect(()=>{
        main.current.classList.add("on");

        axios
            .get(url)
            .then(json=>{
                //console.log(json.data.data);
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
                    <article className="welcome">
                        <div className="txt">
                            <p>
                                Our journey toward equity and inclusion should never end. There will always be more for us to understand and do. But we progress in the right direction every day that we choose to bring our decency to the forefront of every interaction, to listen to people, to see them for who they are and what they need, to find ways to level the playing fields and build pathways to opportunity for everyone.
                                <br /><br />
                                <span>- Joshep, CEO</span>
                            </p>
                            
                        </div>
                        <div className="pic">
                            <img src={path+'/img/welcome.jpeg'} />
                        </div>
                    </article>
                    <div className="members">
                        {members.map((data,idx)=>{
                            return(
                                <article key={idx}>
                                    <div className="pic">
                                        <img src={`${path}/img/${data.pic}`} />
                                    </div>
                                    <div className="con">
                                        <h3>{data.name}</h3>
                                        <span>{data.position}</span>
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