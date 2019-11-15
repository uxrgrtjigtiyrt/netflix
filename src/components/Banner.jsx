import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
height:68px;
width:100vw;
`;

const Logo=styled.img`
height:75%;
`;


const NavText=styled.ul`
display:inline-flex;
justify-content:center;
align-items:center
`;

const NavTextItem = styled.ul`
color:white;
margin-left:20px;
`;

const NavIcon = styled.ul`

`;

const NavIconItem=styled.ul`

`;

const Banner=props=>{
    return <Wrapper>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"/>
        <NavText>
            <NavTextItem>홈</NavTextItem>
            <NavTextItem>TV 프로그램</NavTextItem>
            <NavTextItem>영화</NavTextItem>
            <NavTextItem>최신 등록 콘텐츠</NavTextItem>
            <NavTextItem>내가 찜한 콘텐츠</NavTextItem>
        </NavText>
        <NavIcon>
            <NavIconItem>
                <img src="/search.svg" alt=""/>
            </NavIconItem>
            <NavIconItem>
                <img src="gift.svg" alt=""/>
            </NavIconItem>
            <NavIconItem>
                <img src="/bell.svg" alt=""/>
            </NavIconItem>
        </NavIcon>
    </Wrapper>;
}

export default Banner;