import logo from './logo.svg';
import './App.css';
import { PostsList } from './features/posts/PostsList';
import { AddPoster } from './features/posts/AddPost';
import PostCard from './features/posts/PostCard';


//בשם ה' נעשה ונצליח!!!!!!!!!!!!!!!!!!!!!!!
function App() {

  return (
    <div>
      <PostsList />
      <AddPoster />
      <PostCard />
    </div>

  );
}

export default App;
