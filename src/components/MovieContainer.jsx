import * as React from "react";
import styled from "styled-components";
import Movieitem from "./MovieItem";

const BtnSize = "45px";

const Wrapper = styled.div`
  color: white;
  margin: 0 auto;
  width: calc(100% - (${BtnSize} + ${BtnSize}));
  margin-bottom:100px;
  overflow: visible;
  div.title {
    color: white;
    font-weight: bold;
  }
  div.container {
    position: relative;
  }
  div.slider {
    transform: ${props => `translateX(-${props.transform}px)`};
    transition: 0.3s;
    display: -webkit-box;
  }
`;

const BtnLeft = styled.button`
  width: ${BtnSize};
  height: 100%;
  position: absolute;
  right: 100%;
  z-index: 5;
  opacity: 0;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const BtnRight = styled(BtnLeft)`
  left: 100%;
  right: none;
`;
const MovieContainer = props => {
  const [page, setPage] = React.useState(1);
  const [sliderWidth, setSliderWidth] = React.useState(0);
  const slider = React.useRef(undefined);
  React.useEffect(() => {
    setSliderWidth(slider.current.offsetWidth);
  }, []);
  const onClickLeft = () => {
    setPage(page - 1);
  };
  const onClickRight = () => {
    setPage(page + 1);
  };
  return (
    <Wrapper transform={(page - 1) * (sliderWidth + 90)}>
      <div className="title">{props.title}</div>
      <div className="container">
        <BtnLeft onClick={onClickLeft}>{"<"}</BtnLeft>
        <BtnRight onClick={onClickRight}>></BtnRight>
        <div className="slider" ref={slider}>
          {(props.movies||[]).map((value,idx) => (
            <Movieitem key={idx} title={value.title} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default MovieContainer;