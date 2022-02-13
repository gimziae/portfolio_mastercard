import { useEffect, useRef } from "react/cjs/react.development"

export default function Join(){
    let main = useRef(null);
    useEffect(()=>{
        main.current.classList.add('on');
    })
    return(
        <main className="content join" ref={main}>
            <figure className="subvisual">
            
            </figure>
            <div className="inner">
                <h1>join</h1>
                <section>
                    
                </section>
            </div>
        </main>
    )
}