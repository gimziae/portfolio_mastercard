export default function Visual(){
    const path = process.env.PUBLIC_URL;
    return(
        <section id="visual">
            <div className="inner">
                <main>
                    <p className="welcome">WELCOME TO MASTERCARD</p>
                    <div className="txt">
                        <article className="mainTitle">
                            <h1>
                                EXPERIENCE <br />
                                THE WORLD WITH <br />
                                <img src={path+'/img/logo.png'} alt="" />
                                <span>MASTERCARD</span>
                            </h1>
                        </article>
                        <article className="subTitle">
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