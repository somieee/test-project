import React from 'react';
import { NavLink, } from 'react-router-dom';

const defaultLinkStyle={
    marginRight: '10px',
    textDecoration: 'none',
    color : '#000000',
}

const activeLinkStyle={
    color: 'skyblue',
}

function HeaderTabs(props){
    return(
        <div>
            <NavLink exact 
                to='/' 
                style={defaultLinkStyle}
                activeStyle = {activeLinkStyle}
            >
                메인
            </NavLink>
            <NavLink 
                to='/1' 
                style={defaultLinkStyle}
                activeStyle = {activeLinkStyle}
            >
                1번
            </NavLink>
            <NavLink 
                to='/2' 
                style={defaultLinkStyle}
                activeStyle = {activeLinkStyle}
            >
                2번
            </NavLink>
            <NavLink 
                to='/3' 
                style={defaultLinkStyle}
                activeStyle = {activeLinkStyle}
            >
                3번
            </NavLink>
        </div>
    );
}

export default HeaderTabs;