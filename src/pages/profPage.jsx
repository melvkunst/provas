import React, { useState, useContext } from "react";
import { AuthContext } from '../contexts/auth';

const ProfPage = () => {
    const { logout, aulas, saveClass } = useContext(AuthContext);
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [subject, setSubject] = useState();
    const [status, setStatus] = useState();
   
    const handleLogout = () =>{
        logout();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveClass(date, time, subject, 'Criado');  
        console.log(aulas);
    } 

    const aulasList = aulas.map ((it)=>
        <li className="listaAulas" key={it.id}>
            Data da aula: {it.date}
        </li>

    )

    return(
        <>
            <button onClick={handleLogout}>Logout</button>
            <h1>Cadastro de horários: </h1>
            <div className="cadastro">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="day">Dia da aula:</label>
                        <input type="date" id="date" onChange={(e)=>setDate(e.target.value)} value={date}/>
                    </div>
                    <div className="field">
                        <label htmlFor="time">Horário:</label>
                        <input type="text" id="time" onChange={(e)=>setTime(e.target.value)} value={time}/>
                    </div>
                    <div className="field">
                        <label htmlFor="subject">Assunto:</label>
                        <input type="text" id="subject" onChange={(e)=>setSubject(e.target.value)} value={subject}/>
                    </div>
                    <div className="actions">
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
                <br />
                <hr/>
                <br/>
                
            </div>
        </>
        
    )
}

export default ProfPage;