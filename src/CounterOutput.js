// import React from 'react'

// function CounterOutput({counter}) {
//     return (
//         <div>
//            Counter Value = {counter} 
//         </div>
//     )
// }

// export default CounterOutput

import React from 'react'
import { useSelector } from 'react-redux'

function CounterOutput() {
    const counter =  useSelector(state => state.counter)
    return (
        <div>
            Counter Value = {counter}
        </div>
    )
}

export default CounterOutput