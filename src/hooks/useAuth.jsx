import {useState} from 'react';

const API_URL = "https://actreactangular-production.up.railway.app"; 

const useAuth = () => {
    const [token, setToken] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const login = async (user) => {
        const result = await fetch(API_URL + "/login/", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user),
        });
        const data = await result.json();
        console.log(data)
        setIsLogin(data.isLogin);
        setToken(data.token);
        return data.isLogin;
    };
    const logout = () => {
        setIsLogin(false);
    };
    return {isLogin, token, login, logout};
};

export default useAuth;