import "./styles/App.css";

import { connect } from "react-redux";
import updateMovies from "./actions/updateMovies";
import fetchUsers from "./actions/fetchUsers";

function App(props) {
  return (
    <div className="App">
      <h2>Movie List</h2>
      <div>
        <span style={{ color: "indogo-100" }}>Current Movie : </span>
        {props.movies.name}
        <br />
        <button onClick={props.updateMovies}>Next Movie</button>
        <br />
        {props.users.length === 0 ? (
          <p>THERE ARE NO USERS</p>
        ) : (
          props.users.map((user) => (
            <p key={user.id}>
              {user.first_name} - {user.email}
            </p>
          ))
        )}
        <br />
        <button onClick={props.fetchUsers}>FETCH USERS</button>
      </div>
    </div>
  );
}

//making state accessible to movies and users
const MapStateToProps = (state) => {
  return {
    movies: state.movies,
    users: state.users,
  };
};

// Setup Dispatch for our button events.
const MapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => dispatch(updateMovies),
    fetchUsers: () => dispatch(fetchUsers),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
