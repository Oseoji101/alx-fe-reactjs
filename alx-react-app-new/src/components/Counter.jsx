import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (

        <div>
            <p>current count: {count}</p>
            <button onClick={()=> setCount(count + 1)}>increament</button>
            <button onClick={()=> setCount(count - 1)}>decreament</button>
            <button onClick={()=> setCount(0)}>reset</button>
            
        </div>
    )
} export default Counter;