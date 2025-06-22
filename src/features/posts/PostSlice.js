
import { createSlice } from "@reduxjs/toolkit";

// סטייט התחלתי – מכיל שני פוסטים לדוגמה
const initialState = [
  {
    id: 1, // מזהה ייחודי
    title: "פוסט ראשון", // כותרת הפוסט
    body: "זהו תוכן הפוסט הראשון במערכת", // גוף הפוסט
  },
  {
    id: 2,
    title: "פוסט שני",
    body: "גם הפוסט הזה הגיע מהסטייט ההתחלתי",
  },
];

// יצירת slice חדש בשם "posts"
const postsSlice = createSlice({
  name: "posts",        // שם הסלייס
  initialState,         // הסטייט ההתחלתי
  reducers: {
    // פעולה: הוספת פוסט חדש
    addPost: (state, action) => {
      // מוסיף את הפוסט שהגיע בפעולה לסוף המערך
      state.push(action.payload);
    },
    // פעולה: מחיקת פוסט לפי מזהה
    deletePost: (state, action) => {
      // מחזיר מערך חדש בלי הפוסט עם ה-id שצויין
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

// ייצוא הפעולות לשימוש בקומפוננטות
export const { addPost, deletePost } = postsSlice.actions;

// ייצוא ברירת המחדל של ה-reducer לחיבור ל-store
export default postsSlice.reducer;