import React from "react";
import './DisplayUser.css'

export const DisplayUser = ({userList, userInput}) => {

    return (
        <div className="display-user" >
           
                 { (userInput) && userList.map((data) => (
                <div className="user-items" key={data.id}>
                    
                    <div className="name">                      
                        <p>{data.name}</p>
                    </div>
             
                </div>
           
            ))}
        
        </div>
    );
};
