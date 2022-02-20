import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEnvelopeOpen, faLocationDot, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Location(){
    let main = useRef(null);
    const con1 = useRef(null);
    const con2 = useRef(null);
    const con3 = useRef(null);
    const {kakao} = window; //인덱스.html 에서 가져옴 (비구조할당)
    const container = useRef(null); //지도가 들어갈 공간 참조 (#map)
    const [map, setMap] = useState(null); //지도 생성 참조
    const [index, setIndex] = useState(0); //순서값 참조
    const path = process.env.PUBLIC_URL; //퍼블릭 폴더 절대경로(이미지 참조)
    const branch_info = document.querySelectorAll(".branch_info article");
    const branch_btns = document.querySelectorAll(".branch button");
    const traffic_btns = document.querySelectorAll(".traffic button");
    console.log(traffic_btns);
    console.log(branch_btns[0]);
    // 3. kakao 마커 위치정보 및 이미지
    const info =[ 
        {
            title:"본점", 
            latlng : new kakao.maps.LatLng(37.5683731,126.9760812),
            imgSrc : path+'/img/marker.png', 
            imgSize : new kakao.maps.Size(100,100), 
            imgPos : {offset: new kakao.maps.Point(116, 99)},
            tel : '+82(02)123-4557',
            address : '서울 중구 세종대로 136 16층',
            email : 'master_seoul@mastercard.com'
            
        },
        {
            title:"지점1", 
            latlng : new kakao.maps.LatLng(37.262388,127.0304966),
            imgSrc : path+'/img/marker.png',  
            imgSize : new kakao.maps.Size(100,100), 
            imgPos : {offset: new kakao.maps.Point(116, 99)},
            tel : '+82(031)234-5678',
            address : '경기 수원시 팔달구 권광로 170',
            email : 'master_suwon@mastercard.com'
        },
        {
            title:"지점2", 
            latlng : new kakao.maps.LatLng(37.4930506,126.7220412),
            imgSrc : path+'/img/marker.png', 
            imgSize : new kakao.maps.Size(100,100), 
            imgPos : {offset: new kakao.maps.Point(116, 99)}, 
            tel : '+82(032)987-6554',
            address : '인천 부평구 부평대로 20번길 18-1 1층',
            email : 'master_incheon@mastercard.com'
        }
    ]; 

    // info 값을 mapInfo에 담기
    const [mapInfo] = useState(info);

    //처음 컴포넌트 생성 시 한번만 실행
    useEffect(()=>{
        main.current.classList.add('on'); 
        con1.current.classList.add('on');
        con2.current.classList.add('on');
        con3.current.classList.add('on');
        
    },[]) 

    //&&index state값이 변경될 때마다 해당 useEffect를 재실행
    useEffect(()=>{
        container.current.innerHTML = '';

        // 1. 옵션 생성 첫페이지 위치
        const options = {
            center: mapInfo[0].latlng, // 본점 위치
            level: 3
        }

        // 2. 지도 생성하는 코드
        const map = new kakao.maps.Map(container.current, options);
        setMap(map);

        // 4. 마커 생성하는 코드 (const index값 참조)
        new kakao.maps.Marker({
            map: map,
            position: mapInfo[index].latlng,
            title: mapInfo[index].title,
            image: new kakao.maps.MarkerImage(mapInfo[index].imgSrc, mapInfo[index].imgSize, mapInfo[index].imgPos)
        })
        
        // 5. 가운데배치
         // 순서 state값이 변경될 때 마다 맵의 중앙위치를 다시 렌더링(가운데 배치)
        map.setCenter(mapInfo[index].latlng);  

         // mapSet 함수를 변수로 설정
        const mapSet = () => map.setCenter(mapInfo[index].latlng);   

         // 브라우저 리사이즈 시 마커를 중앙에 위치
        window.addEventListener("resize", mapSet);

        // 스카이뷰 생성
        const mapType = new kakao.maps.MapTypeControl();
        map.addControl(mapType, kakao.maps.ControlPosition.TOPRIGHT);

        map.setZoomable(true);
        map.setDraggable(true);

        

        // 해당 컴포넌트가 재 랜더링 될 때 마다 기존 window 객체에 등록된 함수를 다시 제거
        return ()=> window.removeEventListener("resize", mapSet);
    }, [index]);

    return(
        
        <main className="content location" ref={main}>
            <figure className="subvisual">
                <img src={path+'/img/location_sub.jpeg'} />              
                <div className="con">
                    <h1>Creating limitless<br />possibilities for everyone</h1>                    
                </div>
            </figure>
            <div className="inner">
                <section>
                    {/* 콘텐츠 */}
                    <div className="atms">
                        <h1>Get the fact on using ATMs abroad</h1>
                        <article ref={con1}>
                            <div className="pic">
                                <img src={path+'/img/loca_value.png'}/>
                            </div>
                            <div className="con">
                                <h2>Better value</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum cumque alias voluptas omnis consequatur fuga quae corrupti quos dicta?</p>
                            </div>
                        </article>
                        <article ref={con2}>
                            <div className="pic">
                                <img src={path+'/img/loca_conven.png'}/>
                            </div>
                            <div className="con">
                                <h2>More convenient</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque eum quidem sit aut recusandae at ea quod laudantium.</p>
                            </div>
                        </article>
                        <article ref={con3}>
                            <div className="pic">
                                <img src={path+'/img/loca_secure.png'}/>
                            </div>
                            <div className="con">
                                <h2>More secure</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloremque, reiciendis dolore fugit laboriosam harum repellendus voluptatem, magni ab voluptatibus, obcaecati dolor velit eaque aliquam!</p>
                            </div>
                        </article>
                    </div>

                    {/* 버튼 */}
                    <div className="btns">
                        
                        <h2><FontAwesomeIcon icon={faMap} /> <br /> LOCATION</h2>
                        <nav className="branch">
                            {mapInfo.map((data, index)=>{
                                return(
                                <button   key={index} onClick={()=>{ 
                                    setIndex(index)
                                    for(let i=0; i<mapInfo.length; i++){
                                        branch_info[i].classList.remove('on');
                                        branch_btns[i].classList.remove('on');
                                    }
                                    branch_info[index].classList.add('on');
                                    branch_btns[index].classList.add('on');
                                    console.log(index);
                                }}>{data.title}</button>  
                                )
                            })}
                        </nav>     
                        {/* 교통정보 */}
                        <nav className="traffic">
                            <button onClick={()=>{
                                map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
                                for(let i=0;i<traffic_btns.length;i++){
                                    traffic_btns[i].classList.remove('on');
                                }
                                traffic_btns[0].classList.add('on');
                            }}>교통정보 보기</button>
                            <button onClick={()=>{
                                map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
                                for(let i=0;i<traffic_btns.length;i++){
                                    traffic_btns[i].classList.remove('on');
                                }
                                traffic_btns[1].classList.add('on');
                            }}>교통정보 끄기</button>
                        </nav>                         
                    </div>

                    {/* 지도 */}
                    <div className="wrapMap">
                        <div className="branch_info">
                            <article className="on">
                                <h3>{info[0].title}</h3>
                                <address>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    {info[0].address}
                                </address> 
                                <span>
                                    <FontAwesomeIcon icon={faPhone} />
                                    {info[0].tel}
                                </span>
                                <p>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    {info[0].email}
                                </p>             
                            </article>
                            <article>
                                <h3>{info[1].title}</h3>
                                <address>{info[1].address}</address>  
                                <span>{info[1].tel}</span>
                                                          
                            </article>
                            <article>
                                <h3>{info[2].title}</h3>
                                <address>{info[2].address}</address> 
                                <span>{info[2].tel}</span>
                                                           
                            </article>
                        </div>
                        <div id="map" ref={container}></div>
                    </div>

                    {/* 메세지 */}
                    <div className="contact">
                        <h2><FontAwesomeIcon icon={faEnvelopeOpen} /> <br /> SEND US A MESSAGE</h2>
                        <textarea id="comment" cols="30" rows="10" placeholder="What's i your mind..."></textarea>
                        <div className="con">
                            
                            <input type="text" id="name" placeholder="Name"/>
                            <input type="email" id="email" placeholder="Emali"/>

                            <input type="submit" value="SEND NOW" />
                        </div>
                    </div>

                </section>
            </div>
            

        </main>
    )
}