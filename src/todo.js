import React,{Component} from "react";

export default  class Todo extends Component{ 
render(){
    let {id,todo,onRemove} = this.props
    return(
        <li class="lito">{todo} <button  class="delto"onClick={() => onRemove(id)}>x</button></li>
    )
}


}