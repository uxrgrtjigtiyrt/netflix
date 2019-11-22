import React from "react";
import styled from "styled-components"
import MovieItem from "./MovieItem"
const BtnSize = "45px";


const Wrapper = styled.div`
    color:white;
    margin: 0 auto;
    width: calc(100% - (${BtnSize} + ${BtnSize}));
    margin-bottom:10vh;
    .title{
        font-weight:bold;
        margin:20px 0px;
    }
    .container{
        position:relative;
    }
    .slider{
        display:flexbox;
        transform: ${props => `translateX(-${props.translate}px);`};
        transition:0.2s;
    }
`
const BtnLeft = styled.button`
    width: ${BtnSize};
    height:100%;
    position:absolute;
    right:100%;
    z-index:5;
    opacity:0;
    border:none;
    color:white;
    outline:none;
    cursor:pointer;
    &:hover{
        opacity:1;
        background-color: rgba(0,0,0,0.5)
    }
`

const BtnRight = styled(BtnLeft)`
    left:100%;
    cursor:pointer;
    right:none;
`

const MovieContainer = props => {

    const [page, setPage] = React.useState(1);
    const [sliderWidth, setSliderWidth] = React.useState(0);
    const slider = React.useRef(undefined)

    React.useEffect(() => {
        setSliderWidth(slider.current.offsetWidth)
    }, [])

    const onClickLeft = () => {
        if (page !== 1) {
            setPage(page - 1);
        }
    };
    const onClickRight = () => {
        if (page >= Math.ceil(props.movies.length / 5)) {
            console.log("걸림", page, page < Math.ceil(props.movies.length / 5))
            setPage(1);
        }
        else {
            setPage(page + 1)
        }
    };


    return <Wrapper translate={(page - 1) * (sliderWidth + 10)}>
        <div className="title">{props.title}</div>
        <div className="container">
            <BtnLeft onClick={onClickLeft}> {"<"} </BtnLeft>
            <BtnRight onClick={onClickRight}> {">"} </BtnRight>
            <div className="slider" ref={slider}>
                {(props.movies || []).map(value => (
                    <MovieItem title={value.title} imgs={'http://image.tmdb.org/t/p/w185' + value.backdrop_path} />
                ))}
            </div>
        </div>
    </Wrapper>
}

export default MovieContainer;