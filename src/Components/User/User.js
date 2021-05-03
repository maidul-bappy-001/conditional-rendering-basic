import React from 'react';

const User = (props) => {
    const familiar = props.familiar;

    let greetings;
    if(familiar){
        greetings =  <p>Welcome, My Friend</p>
    }
    else{
        greetings =  <p>Who the hell are you ?</p>
    }

    // if else another shortcut system / its called ternary operatpr
    const greetings2 = familiar ? <p>I will buy food for you</p> // "?" = if
                    : <p>Lets eat, his his whose whose</p>; // ":" = else
    return (
        <div>
            <div>
                <h2>Greeting</h2>
                {greetings}
            </div>

            <div>
                <h2>Food</h2>
                {greetings2}
            </div>

            <div>
                <h2>Connection</h2>
               {
                   familiar ? <p>Let's join my facebook</p>
                            :<p>I can't add you</p>
               }
  
            </div>

            <div>
                <h2>Electricity available</h2>
                {
                    familiar && <p>Laptop charging</p>
                }
            </div>
        </div>
    );
};

export default User;