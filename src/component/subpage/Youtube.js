import { useEffect, useRef } from "react/cjs/react.development"

export default function Youtube(){
    let main = useRef(null);
    useEffect(()=>{
        main.current.classList.add("on");
    })
    return(
        <main className="content youtube" ref={main}>
            <figure className="subvisual">
            
            </figure>
            <div className="inner">
                <h1>youtube</h1>
                <section>
                    
                </section>
            </div>
        </main>
    )
}