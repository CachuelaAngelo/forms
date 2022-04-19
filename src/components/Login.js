import React, {Component,useState} from 'react'
import { Route, Redirect, Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
function Login(){
    let history = useHistory();

    const handleSubmit = (event) =>{
        
        var { userEmail, pass } = document.forms[0];

        //looks for the user using the array created above
        const findUser = window.users.find((user)=> user.email === userEmail.value);

        //checks if the user has inputted valid credentials
        if(findUser){
            if(findUser.password !== pass.value){
               alert("You have Inputted the Wrong Credentials")
               event.preventDefault();
            }else{
                history.push("/welcome")  
            }

            
        };

    }

    return(
        <main>
        <div className="form">
            <div className="form_div">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
            <div className="form_div">
                <br />
         <label>
            E-mail:
           
        </label><br />
        <input type="test" class="field_class"name="userEmail" required></input>
        <br></br>
         <label>
            Password:
            <input type="password"   class="field_class"name="pass" required></input>
        </label>
         <br />
         </div>  
            <input className="submit_class" type="submit"></input>   
            
        </form>
        <br />
        <Link  onClick={()=>
        history.push("/register")
        }>
           Haven't Registered Yet?
        </Link>
        
        </div>
        </div>
        </main>
        
    )
    
}

export default Login;
