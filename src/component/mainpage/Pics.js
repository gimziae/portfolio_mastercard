import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFlickr } from "../../redux/actions"

export default function Pics(){
    // redux gallery에서 불러오기
    const picData = useSelector(state=>state.flickrReducer.flickr);
    const dispatch = useDispatch();

    const getFlickr = async ()=>{
        const api_key = 'b072a82db9c1f7aa2824864534bfc3a1';
        const method1 = 'flickr.interestingness.getList';
        const num = 10;
        const url = `https://www.flickr.com/services/rest/?method=${method1}&per_page=${num}&api_key=${api_key}&format=json&nojsoncallback=1`;

        await axios.get(url).then(json=>{
            dispatch(setFlickr(json.dataphotos.photo));
        })
    }

    useEffect(()=>{
        if(picData.length===0) getFlickr();
    },[])

    return(
        <section id="pics" className="myScroll">
            <div className="inner">
                <main>
                    <h1>Preview</h1>
                    <div className="wrap">
                        {picData.map((pic, idx)=>{
                            if(idx<10){
                                return(
                                    <article key={idx}>
                                        <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} />
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