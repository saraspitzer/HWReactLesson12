import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "./PostSlice";
const PostCard = () => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    return (
        <div>
            {posts.map((p) => (
                <div key={p.id} style={{ border: '1px solid gray', margin: '1rem', padding: '1rem' }}>
                    <p>מספר מזהה: {p.id}</p>
                    <strong>{p.title}</strong>:{p.body}
                    <br />
                    <button onClick={() => dispatch(deletePost(p.id))}>מחק פוסט</button>
                </div>
            ))
            }

        </div >
    );
}
export default PostCard;