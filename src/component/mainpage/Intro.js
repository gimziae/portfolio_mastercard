
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { Pagination, EffectFade } from "swiper";

export default function Intro({scrolled, posStart}){
    const path = process.env.PUBLIC_URL;


    // 스크롤모션 적용
    const base = -300;
    const start = posStart+base;
    // console.log(start);
    // console.log(scrolled);

    return(
        <section id="intro" className="myScroll">
            <div className="back1"
                style={
                    scrolled>=start
                    ?
                    {
                        left:`-200px`,
                        bottom:`-250px`
                    }
                    :
                    null
                }
            ></div>
            <div className="back2"
                style={
                    scrolled>=start
                    ?
                    {
                        right:`-300px`,
                        top:`-300px`
                    }
                    :
                    null
                }
            ></div>
            <div className="inner">
                <Swiper
                    // effect={"fade"}
                    pagination={{   
                        clickable:true,
                    }}
                    modules={[EffectFade, Pagination]}
                    grabCursor={"true"}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <article>    
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <article>    
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
                    </SwiperSlide>
                </Swiper>
                
            </div>
        </section>
    )
}