import { NavLink } from "react-router-dom"
;
export default function News({scrolled, posStart}){
    const base = -300;
    const start = posStart+base;

    return(
        <section id="news" className="myScroll">
            <div className="inner">
                <main>
                    <div className="start">
                        <div className="box">
                            <div className="circle"></div>
                        </div>
                            <p
                            style={
                                scrolled>=start
                                ?
                                {
                                    opacity:`1`,
                                    transform: `translateY(0px)`
                                }
                                :
                                null
                            }
                            >START <br /> ACCEPTING <br /> AND GROW <br /> YOUR BUSINESS</p>
                           
                    </div>

                    <div className="more"
                        style={
                            scrolled>=start
                            ?
                            {
                                bottom:`0`,
                                opacity:`1`
                            }
                            :
                            null
                        }
                    >
                        <p>Increased sales, better customer relationships, streamlined operations - the benefits are easy to see.</p>
                        <NavLink to='/'>GET <br /> STARTED</NavLink>
                    </div>
                </main>
            </div>
        </section>
    )
}