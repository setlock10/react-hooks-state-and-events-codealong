
import React, {useState} from "react";

function Toggle() {

  const [isOn,setIsOn]=useState(false);  //set initial state

  function handleClick(){

    setIsOn(isOn=> !isOn)

  }











  return <button onClick={handleClick}>{isOn?"ON":"OFF"}</button>;
}

export default Toggle;
