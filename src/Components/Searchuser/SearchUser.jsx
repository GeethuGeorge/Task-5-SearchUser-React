import React from "react";
import "./SearchUser.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const SearchUser = ({handleChange, clearSearchOne, userInput, handleKeyDown}) => {
    return (
        <div className="search-user">

            <div className="display-input">
                <input type="text" value= {userInput} placeholder="Search here..." onChange={handleChange} onKeyDown={handleKeyDown}/>
            </div>

             <div className="close-button">
                {userInput && 
                <button onClick={clearSearchOne}>
                <FontAwesomeIcon icon={faXmark} className="closeIcon"  />
                </button>
                }
            </div>

        </div>
    );
};
