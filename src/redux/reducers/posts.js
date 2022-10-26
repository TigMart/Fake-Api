const posts = window.localStorage.getItem("posts");
let postsState = posts ? JSON.parse(posts) : null;

export const postsReducer = (state = postsState, action) => {
  if (action.type === "GET_ALL_POSTS") {
    return [...action.payload.posts];
  }
  if (action.type === "SELECT_POST") {
    return [action.payload.post];
  }
  if (action.type === "SET_POST") {
    return [...state, action.payload.post];
  }
  if (action.type === "TO_DELETE") {
    return [...action.payload.posts];
  }
  if (action.type === "ON_EDIT") {
    return [...action.payload.content];
  }
  return state;
};
