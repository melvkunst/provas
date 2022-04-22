import React, { useState, useContext } from "react";
import { AuthContext } from '../contexts/auth';


const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");

    const { user, login } =useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validate()) return;
        
        login(username,password);
        const loginSuccesful=false;
        console.log(user);
        if(user==null){
            setStatus("Senha ou username errados!");
        }else{
            setStatus("");
            loginSuccesful=true;
        }

        console.log("submit", {username,password});
    }

    function validate(){
        if(!username) return setStatus("Preencha o Username!");
        if(!password) return setStatus("Preencha a Senha!");
        return true;
    }


    return (
        <div id="login">
            <h1 className="title">Login do sistema</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="username">Username</label>
                    <input type="username" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="validacao">
                    {status}
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;