import { NavLink } from "react-router-dom";

export default function Intro(){
    const path = process.env.PUBLIC_URL;
    return(
        <section id="intro">
            <div className="inner">
                <main>

                    <article className="innov on">    
                        <div className="txt">
                            <span>INNOVATION</span>
                            <h1>
                                JUST TAP <br />
                                AND GO <img src={path+'/img/logo.png'} alt="" />
                            </h1>   
                            <div className="con">
                                <p>With a fast and easy tap of your Mstercard, you can enjoy comvenient checkout for everyday purchases.</p>   
                                <NavLink to='/'>
                                    <span>
                                        LEARN <br /> MORE
                                    </span>
                                </NavLink>                                  
                            </div>        
           
                        </div>
                        <div className="pic">
                            <img src={path+'/img/innovation.jpeg'} alt="" />
                        </div>                               
                    </article>

                    <article className="resource">    
                        <div className="txt">
                            <span>RESOURCES</span>
                            <h1>
                                Lorem, sit <br />
                                dolor amet <img src={path+'/img/logo.png'} alt="" />
                            </h1>   
                            <div className="con">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolore laboriosam pariatur suscipit nostrum libero.</p>   
                                <NavLink to='/'>
                                    <span>
                                        LEARN <br /> MORE
                                    </span>
                                </NavLink>                                  
                            </div>        
           
                        </div>
                        <div className="pic">
                            <img src={path+'/img/innovation2.jpeg'} alt="" />
                        </div>                               
                    </article>

                    <ul className="btns">
                        <li className="on" onClick={()=>{
                            const article = document.querySelectorAll("article");
                            article.currnet.classList.add("innov");
                        }}>
                        </li>
                        <li onClick={()=>{
                            const article = document.querySelectorAll("article");
                            article.currnet.classList.add("resources");
                        }}
                        ></li>
                    </ul>
                </main>
            </div>
        </section>
    )
}