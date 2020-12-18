// import React, { useState } from 'react'
// import './App.css';
// import CounterInput from './CounterInput'
// import CounterOutput from './CounterOutput'

// function App() {
// const [counter, setcounter] = useState(0);
//   return (
//     <div className="App">
//       <CounterOutput counter= {counter}/>
//       <CounterInput counter= {counter} setcounter={setcounter}/>
      
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import './App.css';
import CounterInput from './CounterInput'
import CounterOutput from './CounterOutput'
import { Provider } from 'react-redux'
import store from './store/store'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CounterOutput />
      <CounterInput />
    </div>
    </Provider>
  )
}
export default App;