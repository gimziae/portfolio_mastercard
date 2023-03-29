import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Header(props) {
	const active = { color: "#ffb850" };
	const path = process.env.PUBLIC_URL;
	const [isOn, setIsOn] = useState(false);
	const toggleNav = () => setIsOn(!isOn);
	// 미디어쿠ㅓ리 적용
	const closeNav = () => window.innerWidth > 1180 && setIsOn(false);

	//윈도우 사이즈가 커질 때 자동 창 닫기
	useEffect(() => {
		window.addEventListener("resize", closeNav);
		return () => window.removeEventListener("resize", closeNav);
	}, []);

	return (
		<>
			<header className={props.type}>
				<div className="inner">
					<h1>
						<NavLink exact to="/">
							<img
								className="logo"
								src={path + "/img/logo.png"}
							/>
						</NavLink>
					</h1>

					{/* web menu */}
					<nav id="gnbWeb">
						<Gnb />
					</nav>

					{/* join menu */}
					<ul className="util">
						<li>
							<NavLink activeStyle={active} to="/join">
								Join
							</NavLink>
						</li>
						<li>
							<FontAwesomeIcon icon={faUser} />
						</li>
					</ul>

					{/* mobile menubutton */}
					{!isOn ? (
						<FontAwesomeIcon
							onClick={toggleNav}
							icon={faBars}
							id="gnbMoIcon"
						/>
					) : (
						<FontAwesomeIcon
							onClick={toggleNav}
							icon={faX}
							id="gnbMoIcon"
						/>
					)}
				</div>
			</header>

			{/* mobile aside menu */}
			<nav id="menuMo" className={isOn ? "on" : ""}>
				<div className="logoMo">
					<img src={path + "/img/logo.png"} />
					<h1>MASTER CARD</h1>
				</div>
				<Gnb toggleNav={toggleNav} />
			</nav>
		</>
	);

	// menu component
	function Gnb(props) {
		const active = { color: "#ffb850" };
		return (
			<ul id="gnb" onClick={props.toggleNav}>
				<li>
					<NavLink activeStyle={active} to="/department">
						Department
					</NavLink>
				</li>
				<li>
					<NavLink activeStyle={active} to="/community">
						Community
					</NavLink>
				</li>
				<li>
					<NavLink activeStyle={active} to="/gallery">
						Gallery
					</NavLink>
				</li>
				<li>
					<NavLink activeStyle={active} to="/youtube">
						Youtube
					</NavLink>
				</li>
				<li>
					<NavLink activeStyle={active} to="/location">
						Location
					</NavLink>
				</li>
			</ul>
		);
	}
}
