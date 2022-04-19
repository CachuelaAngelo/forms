import React, {Component,useState} from 'react'
import {useHistory} from 'react-router-dom'

function Registration(){

    let history = useHistory();

    const handleSubmit = (event) =>{

    //Checks if both password and confirm password is same
    if(event.target.password.value === event.target.cPassword.value){
          //Alert Box for confirming of submission
          const answer = window.confirm("Are you Sure?");
        if(answer){
            alert("Your Submission has been Recorded!")
          history.push('/welcome');
        }else{
            alert("Pls double check your inputs");
            
        }
      }else{
          alert("Your Password does not Match");
          event.preventDefault();
      }
    }

     
    return(
        <main>
        <div className='RegForm'>
            <h1>Registration Form</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text"  className="field_class" name="firstName" required></input>
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text"  className="field_class" name="lastName"  required></input>
                </label>
                <br />
                <label>
                    Gender:
                    <br />
                    <br />
                    <select name="Gender" className="field_class">            
                     <option value="Male">Male</option>
                       <option value="Female">Female</option>
                       <option value="Prefer Not to Say">Prefer Not to Say</option>
                       
                    </select>
                <br />
                </label>
                <label>
                    Email:
                    <input type="text"  className="field_class" name="email"  required></input>
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" className="field_class" name="password"  required></input>
                </label>
                <br />
                <label>
                    Confirm Passowrd:
                    <input type="password"  className="field_class" name="cPassword" required></input>
                </label>
               
                <br />
                <input className="submit_class"type="submit"></input>
            </form>
        </div>
        </main>
    )
}

export default Registration;
