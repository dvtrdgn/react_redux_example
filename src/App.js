
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";


function App() {

  const dispatch = useDispatch()

  const {counter} = useSelector(state=>state.counter)

console.log(counter)

  return (
    <div className="App my-10">
      <button onClick={()=>{dispatch(decrement())}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        -
      </button>
      <span className="mx-10">{counter}</span>
     
      <button onClick={()=>{dispatch(increment())}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        +
      </button>
    </div>
  );
}

export default App;
