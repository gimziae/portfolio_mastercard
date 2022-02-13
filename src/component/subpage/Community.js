import { useEffect, useRef } from "react";

export default function Community(){
    let main = useRef(null);
    useEffect(()=>{
        main.current.classList.add("on");
    })

    return(
        <main className="content community" ref={main}>
            <figure className="subvisual">

            </figure>
            <div className="inner">
                <h1>community</h1>
                <section>
                    
                </section>
            </div>
        </main>
    )
}