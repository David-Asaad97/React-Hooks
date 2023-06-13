import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://api.github.com/users";

const FetchComponent = () => {
    const [users, setUsers] = useState([]);
    const getData = async ()=>{
        // axios.get(url).then(response => setUsers(response.data))
        // .catch(err => alert(err));
        const response = await axios.get(url);
        // console.log(response);
        setUsers(response.data);
    }


    useEffect(() =>{
        getData();
    },[])

    return (
        <div>
            <h1>Fetch Component</h1>
            <ul className="users">
                {users.map((user) => {
                    const {login : person, id, avatar_url: img, html_url: ahref} = user;
                    return(
                        <a href={ahref} target="_blank" hrefLang="eng" key={id} rel="noreferrer">
                            <li  className="shadow" style={{borderRadius: '10px'}}>
                            
                                    <img src={img} alt={person} />
                                    <h5>{person}</h5>
                                
                            </li>
                        </a>
                    );
                })}
            </ul>
        </div>
    );
};

export default FetchComponent;
