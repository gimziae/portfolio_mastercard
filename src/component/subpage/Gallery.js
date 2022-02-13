import { useEffect, useRef } from "react";

export default function Gallery(){
    let main = useRef(null);
    useEffect(()=>{
        main.current.classList.add('on');
    })
    return(
        <main className="content gallery" ref={main}>
            <figure className="subvisual">
            
            </figure>
            <div className="inner">
                <h1>gallery</h1>
                <section>
                    
                </section>
            </div>
        </main>
    )
}