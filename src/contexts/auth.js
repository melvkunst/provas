import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext({});

function AuthProvider({ children }){
    const navigate = useNavigate();
    
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
/* converter para boleano '!!' */

    useEffect(()=>{
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);

    const [aulas,setAulas] = useState({id:1,date:'',time:'',subject:'',idAluno:'',status:''});

    const saveClass = (date,time,subject,status) =>{
        const newClass = {
            id: aulas.length+1,
            date: date,
            time: time,
            subject: subject,
            status:status
        };
        setAulas([...aulas, newClass]);
        
    };

    const login = (usernamePage, passwordPage)=>{
        const users = [
            {id: 1, nome:'Joana', username: 'joana2022', password: '123', perfil: "aluno"},
            {id: 2, nome:'Pedro', username: 'pedrinho', password: 'pc1999', perfil: "prof"}];
        
        
        console.log(users[0].nome); 
        
        if (passwordPage==users[0].password && usernamePage==users[0].username){
            const loggedUser=users[0];
            localStorage.setItem("user", JSON.stringify(loggedUser));
            setUser(loggedUser);
            navigate("/aluno");
        }
        else if (passwordPage==users[1].password && usernamePage==users[1].username){
            const loggedUser=users[1];
            localStorage.setItem("user", JSON.stringify(loggedUser));
            setUser(loggedUser);
            navigate("/prof");
        }
        else{
            setUser(null);
        }
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return(
        <AuthContext.Provider value={{user, login, loading, logout, aulas, saveClass}}> 
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;