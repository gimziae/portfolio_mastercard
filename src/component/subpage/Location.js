import { useEffect, useRef } from "react/cjs/react.development"

export default function Location(){
    let main = useRef(null);
    useEffect(()=>{
        main.current.classList.add('on');
    })
    return(
        <main className="content location" ref={main}>
            <figure className="subvisual">
            
            </figure>
            <div className="inner">
                <h1>location</h1>
                <section>
                    
                </section>
            </div>
        </main>
    )
}