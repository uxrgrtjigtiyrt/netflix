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
        <MovieContainer />
      </div>
    );
  }
}

export default Main;
