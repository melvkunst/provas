import React, { useState, useContext } from "react";
import { AuthContext } from '../contexts/auth';

const AlunoPage = () => {
    const { logout } = useContext(AuthContext);
   
    const handleLogout = () =>{
        logout();
    };
    return(
        <>  
            <button onClick={handleLogout}>Logout</button>
            <h1>Pagina do aluno</h1>
        </>
        
    )
}

export default AlunoPage;