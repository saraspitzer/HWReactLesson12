import { useSelector } from "react-redux";
export const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  // החזרת JSX שמציג את רשימת הפוסטים ואת קומפוננטת ההוספה
  return (
    <div style={{ direction: "rtl", padding: "2rem" }}> {/* יישור לימין + רווח */}
      <h2>רשימת פוסטים</h2> {/* כותרת */}

      <ul>
        {/* מעבר על כל הפוסטים והצגה שלהם כתגית <li> */}
        {posts.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong>: {p.body}
          </li>
        ))}
      </ul>

      <hr /> {/* קו מפריד */}

    </div>
  );
};


