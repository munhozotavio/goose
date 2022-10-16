import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('access_token');
        return tokenString
    }
    
    const [token, setToken] = useState(getToken());

    const saveToken = (token) => {
        const obj = Object.entries(token);
        if (obj.length == 0) return
        localStorage.setItem(obj[0][0],obj[0][1]);
        setToken(obj[0][1])
    }   

    return {
        token,
        setToken: saveToken
    }
}