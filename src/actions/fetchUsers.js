export const FETCH_USERS = "FETCH_USERS";

// fetching data from reqres.io and returning the data to our payload.
const fetchUsers = (dispatch) => {
  fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_USERS, payload: res.data }));
};
export default fetchUsers;
