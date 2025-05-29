import React, { useContext, useState } from 'react';
import MyContext from '../context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const currentUser = useContext(MyContext).currentUser;//רשימה של משתמשים
    const users = useContext(MyContext).userList;//רשימה של משתמשים
    const func = useContext(MyContext).userLoggedIn;
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("")

    const login = () => {
        const user = users.find(u => u.userName === userName && u.password === password);
        if (!user) {
            alert('אחד הפרטים שגויים');
        } else {
            alert('התחברת בהצלחה');
            func(user);
            navigate('/Products');
        }
    };

    return (
        <div className="contact-form-container" style={{ maxWidth: "400px" }}   >
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); login(); }}>                <label htmlFor="username">שם משתמש</label>
                <input
                    id="username"
                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    placeholder="הכנס שם משתמש"
                    required
                />

                <label htmlFor="password">סיסמה</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="הכנס סיסמה"
                    required
                />

                <button type="submit">התחברות</button>
            </form> </div>
    );
};

export default Login;