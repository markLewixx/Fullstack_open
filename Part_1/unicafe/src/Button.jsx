
const Button =(props) =>{
    
    const {value,onClick}= props;
    console.log(props)
    return(
        <button onClick={onClick} >{value}</button>
    )}
    export default Button
     