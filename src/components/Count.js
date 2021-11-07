import React, { useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(() => count - 1);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <input type="text" className="form-control" />
      <button onClick={() => setIsLoaded(!isLoaded)}>Add text</button>
      {isLoaded ? <p>Hi I am Maxmud</p> : null}
    </div>
  );
};

export default Count;
