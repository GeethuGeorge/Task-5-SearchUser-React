import React, { useEffect, useState } from "react";
import { SearchUser } from "./Searchuser/SearchUser";
import { DisplayUser } from "./Displayuser/DisplayUser";
import axios from "axios";

export const Search = () => {
    //-----------------------------------------------------
    //API
    const API_URL = "https://jsonplaceholder.typicode.com/users";
    //----------------------------------------------------
    //state
    const [userInput, setUserInput] = useState("");

    const [userList, setUserList] = useState([]);

    const [newList, setNewList] = useState(true);
    //-------------------------------------------------------
    //Handle chnage
    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    //-----------------------------------------------------------
    //ClearSearch

    const clearSearchOne = () => {
        setUserInput("");
        setUserList([]);
    };

    //-----------------------------------------------------------------

    const handleKeyDown = (event) => {
        if (event.key === "Backspace" && event.target.tagName === "INPUT") {
            setNewList(false);
        }
    };
    //-------API CALL------------------------------------------------
    //API Call

    const fetchApiRequest = async () => {
        try {
            const response = await axios(API_URL, { params: { query: userInput } });
            const result = response.data;
           
            const filtereditems = result.filter((data) => data.name.toLowerCase().startsWith(userInput.toLowerCase()));
            setUserList(filtereditems);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        fetchApiRequest();
    }, [userInput])
    

    //-------------------------------------------------------
    return (
        <div className="search-container">
            <div className="heading">
                <h2>Search by Name </h2>
            </div>
            <SearchUser
                userInput={userInput}
                handleChange={handleChange}
                clearSearchOne={clearSearchOne}
                handleKeyDown={handleKeyDown}
            />
            <DisplayUser userList={userList} userInput={userInput} />
        </div>
    );
};
