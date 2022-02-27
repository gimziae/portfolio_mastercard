import { useEffect, useRef } from "react";

export default function Visual(){
    const path = process.env.PUBLIC_URL;

    const title = useRef(null);
    const sub_tit = useRef(null);
    useEffect(()=>{
        title.current.classList.add('on');
        sub_tit.current.classList.add('on');
    },[])

    return(
        <section id="visual" className="myScroll">
            <div className="inner">
                <main>
                    <p className="welcome">WELCOME TO MASTERCARD</p>
                    <div className="txt">
                        <article className="mainTitle" ref={title}>
                            <h1>
                                EXPERIENCE <br />
                                THE WORLD WITH <br />
                                <img src={path+'/img/logo.png'} alt="" />
                                <span>MASTERCARD</span>
                            </h1>
                        </article>
                        <article className="subTitle" ref={sub_tit}>
                            <p>
                                We owrd to connect an inclusive digital <br />
                                economy by making transactions <br />
                                <span>safe. simple. smart and accessible.</span>
                            </p>   
                        </article>
                    </div>
                    <div className="pic">
                        <video src={path+'/img/Header_video.mp4'} autoPlay loop muted></video>
                    </div>     
                </main>
            </div>
        </section>
    )
}