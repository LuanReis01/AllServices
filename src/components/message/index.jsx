import React from "react";


import "./styles.css"

export default function Message ({type, msg}) {
return(
    <div  className= "message && [type]">{msg}</div>
)

}
