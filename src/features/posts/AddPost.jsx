import { useState } from "react"; // מאפשר סטייט מקומי בטופס
import { useDispatch } from "react-redux"; // לשליחת פעולות ל־Redux
import { addPost } from './PostSlice'; // ודאי שהנתיב נכון
import { useSelector } from "react-redux";


export const AddPoster = () => {
  const dispatch = useDispatch(); // מאפשר לשלוח פעולה ל־store
    const posts = useSelector((state) => state.posts);


  const [title, setTitle] = useState(""); // שדה לכותרת
  const [body, setBody] = useState("");   // שדה לתוכן

  // פונקציה שנקראת כשלוחצים על הכפתור
  const addClicked = () => {
    // בניית אובייקט הפוסט החדש
    const newPost = {
      id: posts.length+1, // מזהה ייחודי פשוט
      title: title,
      body: body,
    };

    // שליחת הפוסט ל־Redux דרך ה־slice
    dispatch(addPost(newPost));

    // ניקוי השדות אחרי השליחה
    setTitle("");
    setBody("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="כותרת"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="תוכן הפוסט"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <br />
      <button type="button" onClick={addClicked}>
        הוסף פוסט
      </button>
    </form>
  );
};