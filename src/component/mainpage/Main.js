import Header from "../common/Header";
import Intro from './Intro';
import Visual from './Visual';
import News from './News';
import Info from "./Info";
import Pics from "./Pics";
import Btns from "./Btns";
import Anime from "../class/Anime";

import { useEffect, useRef, useState } from "react";


export default function Main(){
    const main = useRef(null);
    const pos = useRef([]);
    const [index, setIndex] = useState(0);
    const [scrolled, setScrolled] = useState(0);

    const getIndex = index => {
        setIndex(index);
    }

    const getPos = ()=>{
        const secs = main.current.querySelectorAll(".myScroll");
        let arr = [];
        for(let sec of secs) arr.push(sec.offsetTop);
        pos.current = arr;
    }


    const activation = () => {
        setScrolled(window.scrollY);
        const base = -200;
        let scroll = window.scrollY;
        const btns = main.current.querySelectorAll("#btns li");

        pos.current.map((pos, idx)=>{
            if(scroll >= pos+base){
                for(const btn of btns) btn.classList.remove("on");
                btns[idx].classList.add("on");
            }
        })
    }


    useEffect(()=>{
        getPos();

        window.addEventListener('resize', getPos);
        window.addEventListener('scroll', activation);
        return () =>{
            window.removeEventListener('resize', getPos);
            window.removeEventListener('scroll', activation);
        } 
    },[]);

    useEffect(()=>{

        new Anime(window, {
            prop: 'scroll',
            value: pos.current[index],
            duration: 500
        })
    },[index]);

    return(
        <div id="mainWrap" ref={main}>
            <Header type={"main"}/>
            <Visual />
            <Intro 
                scrolled={scrolled}
                posStart={pos.current[1]}
            /> 
            <News
                scrolled={scrolled}
                posStart={pos.current[2]}
            />
            <Info
                scrolled={scrolled}
                posStart={pos.current[3]}
            />
            <Pics
                scrolled={scrolled}
                posStart={pos.current[4]}
            />
              
            <Btns getIndex={getIndex}/>     
        </div>
    )
}