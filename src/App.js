import "./styles/App.css";

import { connect } from "react-redux";
import updateMovies from "./actions/updateMovies";

function App(props) {
  return (
    <div className="App">
      <h2>Movie List</h2>
      <div>
        <span style={{ color: "indogo-100" }}>Current Movie : </span>
        {props.movies.name}
        <br />
        <button onClick={props.updateMovies}>Next Movie</button>
      </div>
    </div>
  );
}

const MapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => dispatch(updateMovies),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
