import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('access_token');
        return tokenString
    }
    
    const [token, setToken] = useState(getToken());

    const saveToken = (token) => {
        localStorage.setItem("access_token",token);
        setToken(token);
    }   

    return {
        token,
        setToken: saveToken
    }
}