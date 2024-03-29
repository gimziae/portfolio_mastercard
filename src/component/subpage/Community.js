import { useEffect, useRef, useState } from "react";

export default function Community() {
	const main = useRef(null);
	const path = process.env.PUBLIC_URL;

	const input = useRef(null); //inputBox의 input에 입력되는 값 useRef
	const textarea = useRef(null); //inputBox의 textarea에 입력되는 값 useRef

	const showbox = useRef(null); //showList 내용 useRef

	const updateInput = useRef(null); //수정된 title(input)useRef
	const updateTextarea = useRef(null); //수정된 content(textarea)useRef

	// localStorage에 저장된 데이터값 불러오는 함수
	const getLocalItems = () => {
		let data = localStorage.getItem("posts");

		if (data) {
			//문자를 > 객체로 변경(parse)하는 함수
			return JSON.parse(data);
		} else {
			//localStorage에 데이터가 없을 때 빈 배열 반환(해당 컴포넌트가 처음 로딩시)
			return [];
		}
	};

	// getLocalItems의 return값에 따라 post값이 할당 됨
	// posts값을 새로 생성된 setPosts로 state값 반환
	const [posts, setPosts] = useState(getLocalItems);

	//게시글 생성 함수
	const createPost = () => {
		const inputVal = input.current.value.trim();
		const textareaVal = textarea.current.value.trim();
		if (
			!inputVal ||
			!textareaVal ||
			inputVal === " " ||
			textareaVal === " "
		) {
			alert("제목과 본문을 입력해주세요.");

			return;
		}
		setPosts([
			{
				title: input.current.value,
				content: textarea.current.value,
			},
			...posts, //기존 posts 값 복사
		]);

		//등록 후 input 입력값 새로고침
		input.current.value = "";
		textarea.current.value = "";
	};

	//게시글 삭제 함수
	const deletePost = (index) => {
		setPosts(
			//기존 배열을 받아서 조건식을 통해
			//특정 조건이 성립하는 데이터만 필터링해서 다시 새롭게 반환하는 함수
			posts.filter((_, idx) => idx !== index)
		);
	};

	//게시글 수정 함수 (MODIFY 버튼 클릭 시 수정모드로 변경)
	const enableUpdate = (index) => {
		setPosts(
			//map : 기존의 배열을 돌면서 새로운 배열로 리턴해주는 것
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	//수정모드에서 다시 출력모드로 돌아가는 함수
	const disableUpdate = (index) => {
		setPosts(
			//map : 기존의 배열을 돌면서 새로운 배열로 리턴해주는 것
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	//수정모드 시 수정사항 저장 함수
	const updatePost = (index) => {
		const inputVal2 = updateInput.current.value.trim();
		const textareaVal2 = updateTextarea.current.value.trim();

		if (
			!inputVal2 ||
			!textareaVal2 ||
			inputVal2 === " " ||
			textareaVal2 === " "
		) {
			alert("제목과 본문을 입력해주세요.");
			return;
		}
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) {
					post.title = updateInput.current.value;
					post.content = updateTextarea.current.value;
					// ==
					// const article = showbox.current.children[index];
					// const input = article.querySelector('input');
					// const textarea = article.querySelector('textarea');
					// post.title = input.value;
					// post.content = textarea.value;

					post.enableUpdate = false;
				}
				return post;
			})
		);
	};

	//페이지 첫 실행될 hook
	useEffect(() => {
		main.current.classList.add("on");
	}, []);

	//posts값이 변경될 때마다 실행될 hook
	useEffect(() => {
		//localstorage에 posts키값으로 기존 데이터(객체를)를 문자형태로 변환(stingify)해서 저장
		localStorage.setItem("posts", JSON.stringify(posts));
	}, [posts]);

	return (
		<main className="content community" ref={main}>
			<figure className="subvisual">
				<img src={path + "/img/community_sub.jpeg"} />
				<div className="con">
					<h1>
						Leave your comments
						<br />
						for a better Mastercard
					</h1>
				</div>
			</figure>
			<div className="inner">
				<section>
					<div className="mission">
						<div className="video_wrap">
							<video
								src={path + "/img/community.mp4"}
								autoPlay
								muted
								loop></video>
						</div>
						<div className="txt">
							<span>SUSTAINABILITY AT MASTERCARD</span>
							<h2>
								OUR MISSION IS TO CONNECT AND <br /> POWER A
								DIGITAL ECONOMY THAT <br /> BENEFITS EVERYONE,
								EVERYWHERE <br /> BY MAKING TRANSATIONS <br />{" "}
								<span>
									SAFE, SIMPLE, SMART <br />
									AND ACCESSIBLE.
								</span>
							</h2>
							<p>
								We understand how interconnected the world is,
								and we see firsthand how our commitment to
								environmental and social responsibility - and
								our core values of operating ethically and
								responsibly and with decency - is directly
								connected to our continuing success as a
								business.
							</p>
						</div>

						<div className="logo">
							<div className="logo_wrap">
								<div></div>
								<div></div>
							</div>
							<a href="#">
								MORE ABOUT <br />
								MASTERCARD
							</a>
						</div>
					</div>

					<h1>GUEST BOARD</h1>
					<div id="board">
						<div className="inputBox">
							<div className="wrap">
								<input
									type="text"
									placeholder="제목을 입력하세요."
									ref={input}
								/>{" "}
								<br />
								<textarea
									cols="30"
									rows="10"
									placeholder="내용을 입력하세요"
									ref={textarea}></textarea>{" "}
								<br />
								<div className="inputBtns">
									<button
										onClick={() => {
											//cancle버튼 클릭 시 내용 없어지게 하는 것
											input.current.value = "";
											textarea.current.value = "";
										}}>
										CANCLE
									</button>
									<button onClick={createPost}>CREAT</button>
								</div>
							</div>
						</div>

						<div className="showList" ref={showbox}>
							<div className="wrap">
								{posts.map((post, index) => {
									return (
										<article key={index}>
											{
												// 만약에 클래스명에 enableUpdate가 붙었다면
												post.enableUpdate ? (
													<>
														{/* 수정화면 생성 */}
														<div className="post">
															<input
																type="text"
																defaultValue={
																	post.title
																}
																ref={
																	updateInput
																}
															/>
															<br />
															<textarea
																defaultValue={
																	post.content
																}
																ref={
																	updateTextarea
																}></textarea>
														</div>

														<div className="btns">
															<button
																onClick={() =>
																	updatePost(
																		index
																	)
																}>
																UPDATE
															</button>
															<button
																onClick={() =>
																	disableUpdate(
																		index
																	)
																}>
																CANCLE
															</button>
														</div>
													</>
												) : (
													// 클래스명이 없을 때
													<>
														{/* 초기화면 */}
														<div className="post">
															<h2>
																{post.title}
															</h2>
															<p>
																{post.content}
															</p>
														</div>

														<div className="btns">
															<button
																onClick={() =>
																	enableUpdate(
																		index
																	)
																}>
																MODIFY
															</button>
															<button
																onClick={() =>
																	deletePost(
																		index
																	)
																}>
																DELETE
															</button>
														</div>
													</>
												)
											}
										</article>
									);
								})}
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
