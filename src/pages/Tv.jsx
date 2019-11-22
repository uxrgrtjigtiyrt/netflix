import React from "react";
import Banner from "../components/Banner";
import Preview from "../components/Preview";
import MovieContainer from "../components/MovieContainer";
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      movies:[],
      movies2:[]
    }
  }

  componentDidMount(){
    const response=axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr")
    .then(response =>{
      this.setState({movies: response.data.results})
    })
    .catch(err=>{
      console.log("err!!",err);
    })
    const response2=axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr")
    .then(response2 =>{
      this.setState({movies2: response2.data.results})
    })
    .catch(err=>{
      console.log("err!!",err);
    })
    const response3=axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr")
    .then(response3 =>{
      this.setState({movies3: response3.data.results})
    })
    .catch(err=>{
      console.log("err!!",err);
    })
  }

  render() {
    return (
      <div style={{marginTop:"43%",overflowX:"hidden",width:"100%"}}>
        <Banner />
        <Preview />
        <MovieContainer title="TV프로그램" movies={this.state.movies} />
        <MovieContainer title="드라마" movies={this.state.movies2} />
        <MovieContainer title="드라마" movies={this.state.movies3} />
      </div>
    );
  }
}

export default Main;
