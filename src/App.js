import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { deletePost } from "./actions/postActions";

function App(props) {
  const handleDelete = () => {
    props.deletePost(2);
  };

  return (
    <div className="App">
      {console.log(props)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleDelete}>delet post</button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
