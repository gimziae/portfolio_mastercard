import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Masonry from 'react-masonry-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

// redux
import { useSelector,useDispatch } from "react-redux";
import { setFlickr } from "../../redux/action";

export default function Gallery(){
    const main = useRef(null);
    const frame = useRef(null);
    const input = useRef(null); // input값 참조
    const [items, setItems] = useState([]);
    const [index, setIndex] = useState(0); 
    const [loading, setLoading] = useState(true);
    const [enableClick, setEnableClick] = useState(true);
    const [pop, setPop] = useState(false);

    // redux
    const picData = useSelector(state=>state.flickrReducer.flickr);
    const dispatch = useDispatch();

    // flickr 
    const getFlickr = async opt=>{
        const api = 'b072a82db9c1f7aa2824864534bfc3a1';
        const methoud1 = 'flickr.interestingness.getList';
        const methoud2 = 'flickr.photos.search';
        const num = opt.count;
        let url ='';
        if(opt.type ==='interest'){
            url = `https://www.flickr.com/services/rest/?method=${methoud1}&api_key=${api}&per_page=${num}&format=json&nojsoncallback=1`;
        }
        if(opt.type === 'search'){
            url = `https://www.flickr.com/services/rest/?method=${methoud2}&api_key=${api}&per_page=${num}&tags=${opt.tags}&format=json&nojsoncallback=1`;
        }

        await axios
        .get(url)
        .then(json=>{
            setItems(json.data.photos.photo);
        })          
        setTimeout(()=>{
            frame.current.classList.add('on');
            setLoading(false);
            setTimeout(()=>{
                setEnableClick(true);
            },1000)            
        }, 500)

    }

    const masonryOptions = {
        fitWidth: false,
        gutter: 0,
        itemSelector: '.item',
        transitionDuration: '0.5s'
    }

    // onClick 이벤트 함수형태로 변환
    // flickr interest(url1)호출 함수
    const showInterest = ()=>{
        if(enableClick){
            setEnableClick(false); //재클릭 방지
            setLoading(true); //로딩 실행
            frame.current.classList.remove('on'); //frame(section) on 제거
            getFlickr({
                type: 'interest',
                count: 50
            }); //flick interest 실행
        }
    } 
    const showSearch = ()=>{
        // 검색결과가 없을 시 추가
        let result = input.current.value;
        result = result.trim(); //빈칸 2개이상일 때 1개로 인식하게 > 즉 입력값이 없을 때
        //input.current.value='';

        if(result === ''){
            alert('검색어를 입력하세요.');
            return;
        }
        
        if(enableClick){
            setEnableClick(false); // 여기서 false처리
            setLoading(true);
            frame.current.classList.remove('on');
            getFlickr({
                type: 'search',
                count: 50,
                tags: result
            }); 
            //^getFlickr 내부에 enableClick(true) 마지막에 실행해 원래 값으로 돌려주다      
            
        }    
       // input.current.value='';                   
    }

    // flickr search(url2)호출 함수
    const showSearchEnter = (e)=>{
        if(e.key !== 'Enter') return;
        // 검색결과가 없을 시 추가
        let result = input.current.value;
      //  input.current.value='';

        if(result === ''){
            alert('검색어를 입력하세요.');
            return;
        }

        if(enableClick){
            setEnableClick(false); // 여기서 false처리
            setLoading(true);
            frame.current.classList.remove('on');
            getFlickr({
                type: 'search',
                count: 50,
                tags: result
            }); 
            //^getFlickr 내부에 enableClick(true) 마지막에 실행해 원래 값으로 돌려주다                         
        } 
        result = '';   
    }

      
    useEffect(()=>{
        main.current.classList.add('on');
        getFlickr({
            type: 'interest',
            count: 50
        });
    },[]);

    const path = process.env.PUBLIC_URL;
    return(
        <>
        <main className="content gallery" ref={main}>
            <figure className="subvisual">
                <img src={path+'/img/gallery_sub.jpeg'} />
            </figure>
            <div className="inner">
                {/* visual */}
                <article>

                </article>


                {/* 제목 클릭 시 flickr interest 동작 */}
                <h2 onClick={showInterest}><FontAwesomeIcon icon={faImages} /> <br /> GALLERY</h2>

                {/* 검색기능 */}
                <div className="search">
                    <input 
                        type="text" 
                        className="searchBox" 
                        placeholder="검색어를 입력하세요."
                        ref={input} 
                        onKeyUp={showSearchEnter}/>
                    <button className="searchBtn" onClick={showSearch}>SEARCH</button>
                </div>
                {/* 로딩바 */}
                {loading ? <div className="loading"><span>LOADING</span></div> : null}
                <section id="imgs" ref={frame}>
                    {/* flickr api 호출 */}
                    <Masonry 
                        elementType={'div'}
                        options={masonryOptions}
                    >
                    {items.map((item, index)=>{
                        let title = item.title;
                        let title_len = title.length;
                        return(
                            <article key={index} className='item'>
                                <div className='wrap'>
                                    {/* pic에다가 클릭 이벤트 걸어주기 'onClick' */}
                                    <div
                                        className='pic' 
                                        onClick={()=>{
                                            setPop(true);
                                            setIndex(index);
                                        }}
                                        data={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                                    >
                                        <img src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`} />
                                    </div>
                                    <div className="txt">
                                        <h3>{ title_len > 20 ? title.substr(0,40) + '...' : title }</h3>
                                    </div>        
                                </div>
                    
                            </article>
                        )
                    })}
                    </Masonry>
                </section>
            </div>
        </main>

        { pop ? <Popup/> : null}
        </>
    )
    function Popup(){
        useEffect(()=>{
            document.body.style.overflow = 'hidden';
            return ()=> document.body.style.overflow = 'auto';
        })
        return(
            <aside className='popup'>
                <h1>{items[index].title}</h1>
                <img src={`https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`} />
                <span onClick={()=>{
                    setPop(false);
                }}>close</span>
            </aside>
        )
    }
}