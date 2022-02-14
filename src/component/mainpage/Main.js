import Header from "../common/Header";
import Intro from './Intro';
import Visual from './Visual';
import News from './News';
import Info from "./Info";

export default function Main(){
    return(
        <>
            <Header type={"main"}/>
            <Visual />
            <Intro />
            <Info />
            <News />        
        </>
    )
}