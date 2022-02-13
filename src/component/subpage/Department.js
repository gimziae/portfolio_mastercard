import { useEffect,useRef } from "react";

export default function Department(){
    let main = useRef(null);
    useEffect(()=>{
        main.current.classList.add("on");
    })
    return(
        <main className="content department" ref={main}>
            <figure className="subvisual">
            
            </figure>
            <div className="inner">
                <h1>department</h1>
                <section>
                    
                </section>
            </div>
        </main>
    )
}