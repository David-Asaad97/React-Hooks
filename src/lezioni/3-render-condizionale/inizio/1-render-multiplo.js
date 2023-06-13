import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {
  const [loading, setLoading] = useState(true);
  const [isErr , setIsErr] = useState(false);
  const [user, setUser] = useState("default user");

  const getData = async () =>{
    setLoading(true)
    setIsErr(false);
    try{
      const response = await axios.get(url)
      setUser(response.data);

    }catch(err){
      console.log(err)
      setIsErr(true);
    }
    setLoading(false)
  }

  useEffect(() => {
    getData();
  },[])
  if (loading) {
    return <h2>loading...</h2>
  }if(isErr){
    return <h2>sorry there is an error</h2>
  }
  return (
    <article className=" card d-flex align-items-center p-5 shadow mt-5">
      <img src={user.avatar_url} alt={user.name} style={ {width : '80px', height : ' 80px'} } className=" rounded-circle my-4 shadow"/>
      <h3>{user.login}</h3>
    </article>
  );
};
const loading =()=>{
    return <h2>sorry there is an error</h2>

}
export default ConditionalCompining;
