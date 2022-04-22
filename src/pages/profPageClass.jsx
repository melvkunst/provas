import React, { useState, useContext } from "react";
import { AuthContext } from '../contexts/auth';

class Prof extends React.Component{
    constructor(){
        super();
        this.state = {
            id:'',date:'',time:'',subject:'',idAluno:'',status:''
        }
    }
}