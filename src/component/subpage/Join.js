import { useEffect, useRef, useState } from "react"

export default function Join(){
    let main = useRef(null);

    const initVal = {
        userId: '',
        pwd: '',
        repwd:'',
        email: '',
        gender: false,
        interest: false,
        edu: false,
        comments: ''
    }

    const [val, setVal] = useState(initVal);
    const [err, setErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        setIsSubmit(true);
        setErr(check(val));
    }

    const handleChange = e => {
        const {name,value} = e.target;
        setVal({...val, [name]: value});
    }

    // check 함수
    const handleCheck = e => {
        let isChecked = false;
        const {name} = e.target;
        const inputs = e.target.parentElement.querySelectorAll('input');
        inputs.forEach(el=>{
            if(el.checked) isChecked=true;
        });         
        setVal({...val, [name]: isChecked});    
    }

    // radio 함수
    const handleRadio = e => {
        const {name} = e.target;
        const isCheck = e.target.checked;
        setVal({...val, [name]: isCheck});
    }

    // select 함수
    const handleSelect = e => {
        const{name} = e.target;
        //현재 타켓의 옵션값의 밸류
        const isSelect = e.target.options[e.target.selectedIndex].value;
        setVal({...val, [name]: isSelect});

    }

    //id 인증함수
    const check = val => {
        let errs = {};
        const eng = /[a-zA_Z]/;
        const num = /[0-9]/;
        const spc = /[~!@#$%^&*()_+=-]/;


        //인수로 받은 val이 조건에 부합하면 실행
        if(!val.agree){
            errs.agree = '필수 체크 사항입니다.'
        }
        if(!val.card){
            errs.card ='카드 종류를 선택해 주세요.';
        }
        if( val.userId.length < 5){

            errs.userId = '아이디를 5글자 이상 입력하세요.'
        }

        if( val.pwd.length < 8 || !eng.test(val.pwd) || !num.test(val.pwd) || !spc.test(val.pwd)){

            errs.pwd = '대/소문자, 숫자, 특수문자를 포함한 8글자 이상 입력해 주세요.';
        }
        if( val.pwd !== val.repwd){

            errs.repwd = '비밀번호를 동일하게 입력해 주세요.';
        }        
        if( val.email.length < 8 || !/@/.test(val.email) ){

            errs.email = '이메일 주소는 @를 포함한 8글자 이상 입력해 주세요.';
            }
        if( !val.gender){

            errs.gender = '성별을 선택해 주세요.';
        }
        if( !val.edu ){

            errs.edu = '학력을 선택해 주세요';
        }
        if( val.comments.length < 10){

            errs.comments = '남기는 말을 10글자 이상 입력하세요';
        }
        

        console.log(errs);
        return errs;
    }


    useEffect(()=>{
        main.current.classList.add('on');
    },[])

    //err state값이 변경될 때 마다 
    useEffect(()=>{
        console.log(err);
        const len = Object.keys(err).length;

        if(len === 0 && isSubmit){
            setSuccess(true);
        }else{
            setSuccess(false);
        }
    },[err])

    useEffect(()=>{
        main.current.classList.add('on');
    })
    const path = process.env.PUBLIC_URL;
    return(
        <main className="content join" ref={main}>
            <figure className="subvisual">
                <img src={path+'/img/join_sub.jpeg'} />
                <div className="con">
                    <h1>Join member <br /> Mastercard</h1>      
                </div>
            </figure>

            <div className="inner">
                <section>   
                    <div className="back">
                        <img src={path+'/img/joinback.png'}/>
                    </div>
                    {/* submit 제출 시 handleSubmit 함수 호출 */}
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className="hidden">회원가입 양식</legend>
                            <h2><label for="terms">TERMS & POLICY</label></h2>
                            <textarea name="terms" id="terms">
                                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis enim fugiat deserunt iste iusto assumenda dignissimos soluta labore ad quam vel cupiditate cumque ea, laudantium, consequuntur eius nesciunt dolor sequi officiis ullam a quas fugit eligendi! Sapiente perferendis praesentium omnis nostrum, consequuntur unde, reprehenderit deserunt asperiores vero culpa ipsam. Culpa illo, consequatur, provident totam rem est sint accusamus quam quos veritatis ad hic unde! Nobis voluptatum illum in! Illum facere tenetur nisi quis vero commodi laborum fugit officiis at expedita atque voluptatum natus sunt ratione, ipsum aut odit et tempora, quia similique. Iste a blanditiis, dolore alias eum molestiae accusamus tenetur voluptatum cupiditate esse quo nemo necessitatibus voluptatem nulla. Odit consequatur quidem animi non iste magnam temporibus, ullam quam ea vitae sunt aut magni neque illo perferendis, eveniet labore. Minus, est iste impedit similique eligendi doloremque ea explicabo neque labore dolorem officiis ipsa nam perferendis id ut illo totam obcaecati ex. Necessitatibus laboriosam quisquam ipsam similique est, fuga suscipit iure amet porro ullam aperiam voluptates pariatur, fugiat sunt aspernatur odit quae. Itaque voluptatem, voluptas nisi expedita tenetur a distinctio commodi, quod cumque sit perferendis! Consequuntur praesentium explicabo architecto dolorum eaque? Maiores provident ullam ducimus dolores necessitatibus fugiat hic doloremque.
                            </textarea>

                            <div className="agreement">
                                <input 
                                    type="checkbox" 
                                    name="agree" 
                                    id="agree"
                                    value={val.agree}
                                    onChange={handleCheck}     
                                />
                                <label htmlFor="agree">agree *</label>
                                <span className="err">{err.agree}</span>
                            </div>

                            <table>
                                <caption className="hidden">회원가입 입력</caption>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="card">CARD TYPE</label>
                                        </th>
                                        <td>
                                            <select 
                                                name="card" 
                                                id="card"
                                                onChange={handleSelect}
                                                >
                                                <option value="">생성할 카드를 선택해 주세요.</option>
                                                <option value="standard">STARNDARD
                                                </option>
                                                <option value="world">WORLD
                                                </option>
                                                <option value="elite">ELITE
                                                </option>
                                            </select>
                                            <span className="err">{err.card}</span>
                                        </td>
                                    </tr>
                                    {/* userid */}
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="userId">USER ID</label>
                                        </th>
                                        <td>
                                            <input 
                                                type="text"
                                                id="userId"
                                                name="userId"
                                                placeholder="5글자 이상입력하세요."
                                                //화면에 입력하는 값을 변수로 설정
                                                value={val.userId}
                                                // onChange 추가해줘야 입력값을 리액트에서 읽기가능하다.
                                                onChange={handleChange}
                                            />
                                            <span className="err">{err.userId}</span>
                                        </td>
                                    </tr>
                                    {/* password */}
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="pwd">PASSWORD</label>
                                        </th>
                                        <td>
                                            <input 
                                                type="password" 
                                                name="pwd" 
                                                id="pwd"
                                                placeholder="영어 대,소문자 "
                                                value={val.pwd}
                                                onChange={handleChange}
                                            />
                                            <span className="err">{err.pwd}</span>
                                        </td>
                                    </tr>

                                    {/* password ck */}
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="repwd">PASSWORD CK</label>
                                        </th>
                                        <td>
                                            <input 
                                                type="password" 
                                                name="repwd"
                                                id="repwd"
                                                placeholder="비밀번호를 확인해 주세요."
                                                value={val.repwd}
                                                onChange={handleChange}
                                            />
                                            <span className="err">{err.repwd}</span>
                                        </td>
                                    </tr>

                                    {/* email */}
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="email">E-MAIL</label>
                                        </th>
                                        <td>
                                            <input 
                                                type="email" 
                                                id="email"
                                                name="email"
                                                placeholder="이메일 주소를 입력하세요."
                                                value={val.email}
                                                onChange={handleChange}
                                            />
                                            <span className="err">{err.email}</span>
                                        </td>
                                    </tr>
                                    
                                    {/* gender */}
                                    <tr>
                                        <th scope="row"> GENDER</th>
                                        <td>
                                            <label htmlFor="male">Male</label>
                                            <input 
                                                type="radio" 
                                                name="gender" 
                                                id="female" 
                                                onChange={handleRadio} 
                                            />
                                            <label htmlFor="female">Female</label>
                                            <input 
                                                type="radio" 
                                                name="gender" 
                                                id="female" 
                                                onChange={handleRadio} 
                                            />                               
                                            <span className="err">{err.gender}</span>
                                        </td>
                                    </tr>


                                    {/* edu */}
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="edu">EDUCATION</label>
                                        </th>
                                        <td>
                                            <select 
                                                name="edu" 
                                                id="edu"
                                                onChange={handleSelect}>
                                                <option value="">학력을 선택하세요.</option>
                                                <option value="elementary">초등학교 졸업</option>
                                                <option value="middle">중학교 졸업</option>
                                                <option value="high">고등학교 졸업</option>
                                                <option value="college">대학교 졸업</option>
                                            </select>
                                            <span className="err">{err.edu}</span>
                                        </td>
                                    </tr>

                                    {/* comments */}
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="comments">LEAVE COMMNETS</label>
                                        </th>
                                        <td>
                                            <textarea 
                                                name="comments" 
                                                id="comments" 
                                                value={val.comments}
                                                onChange={handleChange}
                                                cols="30" rows="10"
                                                placeholder="남기는 말"
                                            ></textarea>
                                            <span className="err">{err.comments}</span>
                                        </td>
                                    </tr>

                                    {/* 취소 제출 버튼 */}
                                    <tr>
                                        <th colSpan='2' className="btnSet">
                                            <input type="reset" value="CANCLE" />
                                            <input type="submit" value="SEND" />
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </fieldset>
                    </form>
                    { success ? <div className="success">🎉 회원가입을 축하합니다. 🎉</div> : null}
                </section>
            </div>
        </main>
    )
}