const comments = window.localStorage.getItem("comments");
let commentsState = comments ? JSON.parse(comments) : null;

export const commentsReducer = (state = commentsState, action) => {
  if (action.type === "SELECT_POST_COMMENTS") {
    return [...action.payload.comments];
  }

  return state;
};
