import React from "react"
const Card: React.FC<{children:any, class: any}>= (props:any) =>{
    return (<div className={props.class} >{props.children}</div>)
}
export default Card