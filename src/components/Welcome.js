import React, {Component} from 'react'

import Confetti from 'react-confetti'


function Welcome(){
   
    return( 
  
        <div className="welcome">
              <Confetti
        width={2000}
        height={2000}
      />
        <h1>Welcome to the Home Page</h1>
          
        </div>
    )
}

export default Welcome;