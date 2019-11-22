import React from "react";
import styled from "styled-components";

const Wrapper=styled.div`
    width:calc(20% - 12px);
    padding-bottom:10%;
    height:0;
    position:relative;
    margin-right:30px;
    
    &>div{
        position: absolute;
        left:0;
        right:0;
        bottom:0;
        top:0;
        background-color:#aaa;

        display:flex;
        justify-content:center;
        align-items:center;
    }
    &:hover{
        width:21%;
        
        height:1vh;
        
        transition:0.5s;
    }
`;



const MovieItem=(props)=>{
    return(
        <Wrapper><div>{props.title}</div></Wrapper>
    )
}

export default MovieItem;