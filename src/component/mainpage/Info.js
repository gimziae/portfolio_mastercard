import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazonPay, faApplePay, faGooglePay } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";


export default function Info({scrolled, posStart}){
    const path = process.env.PUBLIC_URL;
    const defaultData = [
        {title: 'Hello', content:'here coms description in detail.'},
        {title: 'Hello', content:'here coms description in detail.'},
        {title: 'Hello', content:'here coms description in detail.'},
        {title: 'Hello', content:'here coms description in detail.'},
        {title: 'Hello', content:'here coms description in detail.'},
        {title: 'Hello', content:'here coms description in detail.'}
    ]

    const getLocalItems = () => {
        let data = localStorage.getItem('posts');
        if(data){
            return JSON.parse(data);
        }else{return defaultData};
    }

    const [posts] = useState(getLocalItems);


    const base = -500;
    const start = posStart+base;

    useEffect(()=>{
        localStorage.setItem('posts', JSON.stringify(posts))
    },[])
    return(
        <section id="info" className="myScroll">
            <div className="inner">
                <main>    
                    <h1
                    style={
                        scrolled>=start
                        ?
                        {
                            transform: `translateY(0px)`,
                            opacity: `1`
                        } 
                        : null
                    }
                    >RECENT POST</h1>
                    <div 
                    className="preview"
                    style={
                        scrolled>=start
                        ?
                        {
                            transform: `translateX(0px)`,
                            opacity: `1`
                        }
                        :
                        null
                    }
                    >
                        <div className="pic">
                            <img src={path+"/img/recent.jpeg"} />   
                        </div>
                        <div className="con">
                            <NavLink to='/'>NEWS</NavLink>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, soluta? Animi recusandae impedit incidunt quo.</p>

                        </div>
                        
                    </div>

                    <div 
                    className="posts"
                    style={
                        scrolled>=start
                        ?
                        {
                            transform: `translateX(0px)`,
                            opacity: `1`
                        }
                        :
                        null
                    }
                    >
                    {posts.map((post, idx)=>{
                        if (idx<3) {
                            let con = post.content;
                            let con_len = post.content.length;
                             
                            return(
                                <article key={idx}>
                                    <NavLink to='/'>NEWS</NavLink>
                                    <h2>{post.title}</h2>
                                    <p>{ con_len>50 ? con.substr(0, 50) + "..." : con}</p>
                                </article>  

                            )
                        }
                    })}                      
                    </div> 
                      
                    

                </main>
            </div>
        </section>
    )
}