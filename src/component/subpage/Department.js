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
            
            </figure>
            <div className="inner">
                <h1>department</h1>
                <section>
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