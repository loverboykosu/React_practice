import { useReducer } from "react";
const Count = () => {
    const [rstate,dispatch] = useReducer((prev,action) => {
        if(action === '+'){
            return ++prev;
        }else if(action === '-'){
            return --prev;
        }
    },0);
    const Countup = () =>{
        dispatch('+');
    }
    const Countdown = () =>{
        dispatch('-');
    }
    return (
        <>
            <h3>{rstate}</h3>
            <button onClick = {Countup}>+</button>
            <button onClick = {Countdown}>-</button>
        </>
    );
}

export default Count;