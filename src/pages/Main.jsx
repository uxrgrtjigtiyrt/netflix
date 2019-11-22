import React from "react";
import Banner from "../components/Banner";
import Preview from "../components/Preview";
import MovieContainer from "../components/MovieContainer";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{marginTop:"43%",overflowX:"hidden",width:"100%"}}>
        <Banner />
        <Preview />
        <MovieContainer title="TV프로그램" movies={[{title: "신서유기7"},{title: "신서유기6"},{title: "신서유기5"},{title: "신서유기4"},{title: "신서유기3"},{title: "신서유기2"},{title: "신서유기1"}]} />
        <MovieContainer title="드라마" movies={[{title: "인생"},{title: "타인은 지옥이다"},{title: "동백꽃 필 무렵"}]} />
        <MovieContainer title="드라마" movies={[{title: "인생"},{title: "타인은 지옥이다"},{title: "동백꽃 필 무렵"}]} />
        <MovieContainer title="드라마" movies={[{title: "인생"},{title: "타인은 지옥이다"},{title: "동백꽃 필 무렵"}]} />
        <MovieContainer title="드라마" movies={[{title: "인생"},{title: "타인은 지옥이다"},{title: "동백꽃 필 무렵"}]} />
        <MovieContainer title="드라마" movies={[{title: "인생"},{title: "타인은 지옥이다"},{title: "동백꽃 필 무렵"}]} />
        <MovieContainer title="드라마" movies={[{title: "인생"},{title: "타인은 지옥이다"},{title: "동백꽃 필 무렵"}]} />
        <MovieContainer title="드라마" movies={[{title: "인생"},{title: "타인은 지옥이다"},{title: "동백꽃 필 무렵"}]} />
        <MovieContainer title="드라마" movies={[{title: "인생"},{title: "타인은 지옥이다"},{title: "동백꽃 필 무렵"}]} />
        <MovieContainer title="드라마" movies={[{title: "인생"},{title: "타인은 지옥이다"},{title: "동백꽃 필 무렵"}]} />
        <MovieContainer title="드라마" movies={[{title: "인생"},{title: "타인은 지옥이다"},{title: "동백꽃 필 무렵"}]} />
      </div>
    );
  }
}

export default Main;
