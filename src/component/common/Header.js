import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


export default function Header(props){
    const active = {color: 'orange'}
    const path = process.env.PUBLIC_URL;
    return(
        <header className={props.type}>
            <div className="inner">
                <h1>
                    <NavLink exact to='/'>
                        <img src={path+'/img/logo.png'} />
                    </NavLink>
                </h1>     

                <ul id="gnbWeb">
                    <li>
                        <NavLink activeStyle={active} to='/department'>Department</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={active} to='/community'>Community</NavLink> 
                    </li>
                    <li>
                        <NavLink activeStyle={active} to='/gallery'>Gallery</NavLink> 
                    </li>
                    <li>
                        <NavLink activeStyle={active} to='/youtube'>Youtube</NavLink> 
                    </li>
                    <li>
                        <NavLink activeStyle={active} to='/location'>Location</NavLink> 
                    </li>
                    <li>
                        <NavLink activeStyle={active} to='/join'>Join</NavLink> 
                    </li>
                </ul>       

                <FontAwesomeIcon icon={faEllipsis}  id='gnbMo'/>
            </div>
        </header>
    )
}