// import React from 'react'

// function CounterInput({counter,setcounter}) {
//     return (
//         <div>
//             <button onClick={()=>setcounter(counter+1)}>+</button>
//             <button onClick={()=>setcounter(counter-1)}>-</button>
            
//         </div>
//     )
// }

// export default CounterInput
 import React from 'react'
 import { useDispatch } from 'react-redux';
 import {inAction, deAction} from './store/Action'
import CounterReducer from './store/reducer';
 function CounterInput({counter, setcounter}){
     const dispatch = useDispatch();

     return (
         <div>
             <h3>Direct dispatching actions</h3>
             <button onClick={()=>dispatch({type: 'INCREMENT'})}>+</button>
             <button onClick={()=>dispatch({type: 'DECREMENT'})}>-</button>


             
         </div>
     )

 }

 export default CounterInput