const initState = {
  posts: [
    { id: 1, title: "aaa", body: "Lorem ipsum dolor" },
    { id: 2, title: "bbb", body: "sdfsadfsaf ipsum dolor" },
    { id: 3, title: "ccc", body: "Lorem sdfasdfasdfas dolor" },
    { id: 4, title: "ddd", body: "Lorem ipsum sdfsadfasdfasdf" },
    { id: 5, title: "eee", body: "Lorem sdfsadfsadfasfasd dolor" },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    const posts = state.posts.filter((p) => p.id !== action.id);
    return { ...state, posts };
  }
  console.log("other action trigggered");
  return state;
};

export default rootReducer;
