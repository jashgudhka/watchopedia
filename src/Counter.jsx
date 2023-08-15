import { useState } from "react";
const Counter = () => {
  //While using hooks, note that hooks should be directly inside the function and never inside any conditional statements
  const [counterState, setCounterState] = useState(() => {
    /*Here an anonymous arrow function is used because if you pass a value or anything directly to initialize the state,
    It will initialize or reset to the default value everytime the functional component is re-rendered. 
    For now it does not make a huge difference since we are using a simple integer value,
    But if you wish to pass a more complex object, it is best to use anonymous arrow function*/
    return { counter: 10, title: "Fun" };
  });
  function incrementCounter() {
    //This can be done if you wish to perfom simple tasks.
    setCounterState({ ...counterState, counter: counterState.counter + 1 });
    // Name of the state is necessary to call the object inside a state.
  }
  function decrementCounter() {
    /* But using prevState is preffered to prevent any problems.*/
    setCounterState((prevState) => {
      // Since we are using the prevState we don't need to call it by name of the state.
      return { ...prevState, counter: prevState.counter - 1 };
    });
  }
  return (
    <div className="col-12 col-md-4 offset-md-4 border text-white">
      <span className="h-2 pt-4 m-2 text-white-50">
        {counterState.title} Counter
      </span>
      <br />
      <button className="btn btn-success m-1" onClick={incrementCounter}>
        +1
      </button>
      <button className="btn btn-danger m-1" onClick={decrementCounter}>
        -1
      </button>
      <br />
      <span className="h-4">
        Counter: &nbsp;
        {/* Since we are returning an object with a property 'counter' we need to call it by 'name-of-state.name-of-object' */}
        <span className="text-success">{counterState.counter}</span>
      </span>
    </div>
  );
};
export default Counter;
